/* -*- coding: utf-8 -*-
============================================================================= */
/*jshint asi: true*/
/*jshint -W030 */

var test = global.unitjs || require('unit.js'),
    util = require('util'),
    should = test.should
    
var dnsjs = require('dnsjs')
var nmcpp = require('nmcpp')
var nmcns = require('../lib/index.js')

/* Tests
============================================================================= */

describe('[0006] SOA', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] non-existent domain', function(done) {
        var debug = require('debug')('nmcns:test-0006-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'nonexistent.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.SOA,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (!err) { return done(new Error('Must fail')) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOTFOUND)
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0020] empty domain', function(done) {
        var debug = require('debug')('nmcns:test-0006-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "ip": "8.8.8.8"
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.SOA,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (err) { return done(err) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOERROR)
                
                res.should.have.property('answer')
                res.answer.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                
                res.answer[0].should.be.instanceof(Object)
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.SOA)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('primary', 'ns-a.dnschain.info')
                res.answer[0].should.have.property('admin', 'hostmaster.dnschain.info')
                res.answer[0].should.have.property('refresh', 600)
                res.answer[0].should.have.property('retry', 600)
                res.answer[0].should.have.property('expiration', 600)
                res.answer[0].should.have.property('minimum', 300)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[0040] using defaults', function(done) {
        var debug = require('debug')('nmcns:test-0006-0040')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "ip": "8.8.8.8",
                    "map": {
                        "www": {
                            "alias": ""
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug,
                defaults: {
                    soa: {
                        primary: 'ns.domain.bit.',
                        admin: 'hostmaster@domain.bit',
                        refresh: 1,
                        retry: 2,
                        expiration: 3,
                        minimum: 4
                    }
                }
            })
            
            dns.request({
                name: 'domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.SOA,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (err) { return done(err) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOERROR)
                
                res.should.have.property('answer')
                res.answer.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                
                res.answer[0].should.be.instanceof(Object)
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.SOA)
                res.answer[0].should.have.property('name', 'domain.bit')
                res.answer[0].should.have.property('primary', 'ns.domain.bit')
                res.answer[0].should.have.property('admin', 'hostmaster.domain.bit')
                res.answer[0].should.have.property('refresh', 1)
                res.answer[0].should.have.property('retry', 2)
                res.answer[0].should.have.property('expiration', 3)
                res.answer[0].should.have.property('minimum', 4)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[0060] using domain data', function(done) {
        var debug = require('debug')('nmcns:test-0006-0060')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "ip": "8.8.8.8",
                    "email": "hostmaster@dnschain.info",
                    "service": [
                        [ "domain", "udp", 10, 0, 53, "ns.@" ],
                        [ "domain", "tcp", 10, 0, 53, "ns.@" ],
                        [ "domain", "udp", 20, 0, 53, "ns-b.dnschain.info." ],
                        [ "domain", "tcp", 20, 0, 53, "ns-b.dnschain.info." ]
                    ],
                    "map": {
                        "*": {
                            "alias": ""
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug,
                defaults: {
                    soa: {
                        refresh: 1,
                        retry: 2,
                        expiration: 3,
                        minimum: 4
                    }
                }
            })
            
            dns.request({
                name: 'domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.SOA,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (err) { return done(err) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOERROR)
                
                res.should.have.property('answer')
                res.answer.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                
                res.answer[0].should.be.instanceof(Object)
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.SOA)
                res.answer[0].should.have.property('name', 'domain.bit')
                res.answer[0].should.have.property('primary', 'ns.domain.bit')
                res.answer[0].should.have.property('admin', 'hostmaster.dnschain.info')
                res.answer[0].should.have.property('refresh', 1)
                res.answer[0].should.have.property('retry', 2)
                res.answer[0].should.have.property('expiration', 3)
                res.answer[0].should.have.property('minimum', 4)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[2000] resolveSoa()', function(done) {
        var debug = require('debug')('nmcns:test-0006-2000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "ip": "8.8.8.8",
                    "email": "hostmaster@dnschain.info",
                    "service": [
                        [ "domain", "udp", 10, 0, 53, "ns.@" ],
                        [ "domain", "tcp", 10, 0, 53, "ns.@" ]
                    ],
                    "map": {
                        "*": {
                            "alias": ""
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug,
                defaults: {
                    soa: {
                        refresh: 1,
                        retry: 2,
                        expiration: 3,
                        minimum: 4
                    }
                }
            })
            
            dns.resolveSoa('domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(res)

                addresses.should.be.instanceof(Object)
                addresses.should.have.property('nsname', 'ns.domain.bit')
                addresses.should.have.property('hostmaster', 'hostmaster.dnschain.info')
                addresses.should.have.property('refresh', 1)
                addresses.should.have.property('retry', 2)
                addresses.should.have.property('expire', 3)
                addresses.should.have.property('minttl', 4)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})