/* -*- coding: utf-8 -*-
============================================================================= */
/*jshint asi: true*/

var debug = require('debug')('dnsjs:resolver')

var _ = require("lodash")
var util = require('util')
var async = require('async')
var net = require('net')

var ipaddr = require('ipaddr.js');

/*jshint -W079 */
var Promise = require('bluebird')
/*jshint +W079 */

var dnsjs = require('dnsjs')
var nmcpp = require('nmcpp')

/* Resolver
============================================================================= */

var Resolver = dnsjs.Resolver.extend({
    init: function(opts) {
        var self = this
        dnsjs.Resolver.prototype.init.apply(this, arguments)
        
        this.opts = _.defaults(this.opts, {
            resolver: nmcpp,
            defaults: {
                soa: {
                    primary: 'ns-a.dnschain.info.',
                    admin: 'hostmaster@dnschain.info',
                    refresh: 600,
                    retry: 600,
                    expiration: 600,
                    minimum: 300
                }
            }
        })
    },
    
    _isValidAddress: function(record, addr) {
        return (
            ((record === 'ip') && (ipaddr.IPv4.isValid(addr))) ||
            ((record === 'ip6') && (ipaddr.IPv6.isValid(addr)))
        )
    },
    
    _isValidServiceRecord: function(record) {
        /*jshint laxbreak: true*/
        return (Array.isArray(record) && (record.length >= 6)
            && (typeof record[0] === 'string')
            && (typeof record[1] === 'string')
            && (typeof record[2] === 'number')
            && (typeof record[3] === 'number')
            && (typeof record[4] === 'number')
            && (typeof record[5] === 'string')
        )
        /*jshint laxbreak: false*/
    },
    
    _checkRedirect: function(question, err, res, callback) {
        var self = this
        if (err.hasOwnProperty('redirect')) {
            self.debug('Redirect detected')
            return self.answer(callback)(null, {
                header: {
                    rcode: dnsjs.consts.NAME_TO_RCODE.NOERROR
                },
                answer: [
                    {
                        name: question.name,
                        class: question.class,
                        type: dnsjs.consts.NAME_TO_QTYPE.CNAME,
                        data: [err.redirect.name, err.redirect.domain].join('.'),
                        ttl: err.redirect.ttl || self.opts.defaultTTL || 300
                    }
                ]
            })
        }
        return callback(err, res) 
    },
    
    _requestAddress: function(question, record, callback) {
        var self = this
        var resolver = self.opts.resolver || nmcpp
        self.debug('Resolving "%s" at "%s"...', record, question.name)
        resolver.resolve(record, {
            debug: self.debug,
            domain: question.name
        },
        function(err, res) {
            if (err) { return self._checkRedirect(question, err, res, callback) }
            var data = Array.isArray(res.data) ? res.data : [res.data]
            var visited = {}
            var answer = []
            if (question.name != res.name) {
                answer.push({
                    name: question.name,
                    class: question.class,
                    type: dnsjs.consts.NAME_TO_QTYPE.CNAME,
                    data: res.name,
                    ttl: res.ttl
                })
            }
            data.forEach(function(addr) {
                if (!visited.hasOwnProperty(addr)) {
                    visited[addr] = true
                    if (!self._isValidAddress(record, addr)) {
                        self.debug('Invalid address "' + addr + '"')
                    } else {
                        answer.push({
                            name: res.name,
                            class: question.class,
                            type: question.type,
                            address: addr,
                            ttl: res.ttl
                        })
                    }
                }
            })
            return self.answer(callback)(null, {
                answer: answer
            })
        })
    },
    
    requestA: function(question, callback) {
        return this._requestAddress(question, 'ip', callback)
    },
    
    requestAAAA: function(question, callback) {
        return this._requestAddress(question, 'ip6', callback)
    },

    requestCNAME: function(question, callback) {
        var self = this
        var resolver = self.opts.resolver || nmcpp
        self.debug('Searching "%s"...', question.name)
        resolver.resolve('', {
            debug: self.debug,
            domain: question.name
        },
        function(err, res) {
            if (err) { return self._checkRedirect(question, err, res, callback) }
            var answer = []
            if (question.name != res.name) {
                answer.push({
                    name: question.name,
                    class: question.class,
                    type: dnsjs.consts.NAME_TO_QTYPE.CNAME,
                    data: res.name,
                    ttl: res.ttl
                })
            }
            return self.answer(callback)(null, {
                answer: answer
            })
        })
    },
    
    requestSOA: function(question, callback) {
        var self = this
        var resolver = self.opts.resolver || nmcpp
        self.debug('Searching "%s"...', question.name)
        resolver.resolve('', {
            debug: self.debug,
            domain: question.name
        },
        function(err, res) {
            if (err) { return self.answer(callback)(err) }
            var soaDefaults = self.opts.defaults.soa
            async.parallel({
                email: function(callback){
                    self.debug('Seaching for an email address...')
                    try {
                        res.data.lookup('email', function(err, res) {
                            if (err) {
                                callback(null, soaDefaults.admin || soaDefaults.hostmaster)
                            } else {
                                callback(null, res)
                            }
                        })
                    } catch(exc) {
                        console.log(exc.stack)
                        return callback(null, soaDefaults.admin || soaDefaults.hostmaster)
                    }
                },
                service: function(callback) {
                    self.debug('Seaching for service records...')
                    try {
                        res.data.lookup('service', function(err, res) {
                            if (err) {
                                return callback(null, soaDefaults.primary || soaDefaults.nsname)
                            }
                            async.filter(res, 
                            function(item, callback) {
                                callback(self._isValidServiceRecord(item) && (item[0] === 'domain'))
                            },
                            function(results) {
                                if (results.length > 0) {
                                    callback(null, results[0][5])
                                } else {
                                    callback(null, soaDefaults.primary || soaDefaults.nsname)
                                }
                            })
                        })
                    } catch(exc) {
                        console.log(exc.stack)
                        callback(null, soaDefaults.primary || soaDefaults.nsname)
                    }
                }
            },
            function(err, res) {
                self.debug('Results:')
                self.debug(res)
                self.utils.transformDomainName(res.service, question.name, function(err, primary) {
                    if (err) { return self.answer(callback)(err) }
                    return self.answer(callback)(null, {
                        answer: [
                            {
                                name: question.name,
                                class: question.class,
                                type: dnsjs.consts.NAME_TO_QTYPE.SOA,
                                primary: primary,
                                admin: res.email.replace('@', '.'),
                                serial: Math.floor((new Date()).getTime() / 1000 / 60),
                                refresh: soaDefaults.refresh || 300,
                                retry: soaDefaults.retry || 300,
                                expiration: soaDefaults.expiration || soaDefaults.expire || 300,
                                minimum: soaDefaults.minimum || soaDefaults.minttl || 300,
                                ttl: soaDefaults.minimum || soaDefaults.minttl || 300
                            }
                        ]
                    })
                })
            });
        })
    },
    
    requestTXT: function(question, callback) {
        var self = this
        var resolver = self.opts.resolver || nmcpp
        self.debug('Resolving "info" at "%s"...', question.name)
        resolver.resolve('info', {
            debug: self.debug,
            domain: question.name
        },
        function(err, res) {
            if (err) { return self.answer(callback)(err) }
            var records = Array.isArray(res.data) ? res.data : [res.data]
            var answer = []
            records.forEach(function(item) {
                self.debug(item)
                if (typeof item === 'string') {
                    answer.push({
                        name: question.name,
                        class: question.class,
                        type: dnsjs.consts.NAME_TO_QTYPE.TXT,
                        data: item,
                        ttl: res.ttl
                    })
                }
            })
            return self.answer(callback)(null, {
                answer: answer
            })
        })
    },

    _requestService: function(question, opts, callback) {
        var self = this
        var resolver = self.opts.resolver || nmcpp
        self.debug('Resolving "info" at "%s"...', question.name)
        resolver.resolve('service', {
            debug: self.debug,
            domain: question.name
        },
        function(err, res) {
            if (err) { return self.answer(callback)(err) }
            var services = Array.isArray(res.data) ? res.data : [res.data]
            async.reduce(services, [], function(memo, item, callback){
                if (self._isValidServiceRecord(item) && (opts.validate(item))) {
                    self.utils.transformDomainName(item[5], question.name, 
                    function(err, name) {
                        if (err) { return callback(null, memo) }
                        memo.push(opts.format(res, item, name))
                        callback(null, memo)
                    })
                } else {
                    callback(null, memo)
                }
            }, function(err, results) {
                return self.answer(callback)(err, {
                    answer: results
                })
            });
        })
    },
    
    requestNS: function(question, callback) {
        var self = this
        return this._requestService(question, {
            validate: function(srv) {
                // https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
                return (srv[0] === 'domain')
            },
            format: function(res, srv, name) {
                return {
                    name: question.name,
                    class: question.class,
                    type: question.type,
                    data: name,
                    ttl: res.ttl
                }
            }
        }, callback)
    },
    
    requestMX: function(question, callback) {
        var self = this
        return this._requestService(question, {
            validate: function(srv) {
                // https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
                return (srv[0] === 'smtp')
            },
            format: function(res, srv, name) {
                return {
                    name: question.name,
                    class: question.class,
                    type: question.type,
                    exchange: name,
                    priority: srv[2],
                    ttl: res.ttl
                }
            }
        }, callback)
    },

    requestSRV: function(question, callback) {
        var self = this
        var resolver = self.opts.resolver || nmcpp
        self.utils.splitServiceName(question.name, function(err, service, protocol, domain) {
            if (err) { return self.answer(callback)(err) }
            self.debug('Resolving "service" at "%s"...', domain)
            resolver.resolve('service', {
                debug: self.debug,
                domain: domain
            },
            function(err, res) {
                if (err) { return self.answer(callback)(err) }
                var services = Array.isArray(res.data) ? res.data : [res.data]
                async.reduce(services, [], function(memo, item, callback){
                    if (self._isValidServiceRecord(item) && (item[0] == service) && (item[1] == protocol)) {
                        self.utils.transformDomainName(item[5], domain, 
                        function(err, target) {
                            if (err) { return callback(null, memo) }
                            memo.push({
                                name: question.name,
                                class: question.class,
                                type: dnsjs.consts.NAME_TO_QTYPE.SRV,
                                priority: item[2],
                                weight: item[3],
                                port: item[4],
                                target: target,
                                ttl: res.ttl
                            })
                            callback(null, memo)
                        })
                    } else {
                        callback(null, memo)
                    }
                }, function(err, results) {
                    return self.answer(callback)(err, {
                        answer: results
                    })
                });
            })
        })
    }
})

/* Module
============================================================================= */

var Module = Resolver.extend({
    init: function(opts) {
        Resolver.prototype.init.apply(this, arguments)
        
        this.Resolver = Resolver
    }
})

/* Exports
============================================================================= */

global.nmcns = new Module()

module.exports = global.nmcns
