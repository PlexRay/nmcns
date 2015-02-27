/* -*- coding: utf-8 -*-
============================================================================= */
/*jshint asi: true*/
/*jshint -W030 */

var test = global.unitjs || require('unit.js'),
    util = require('util'),
    async = require('async'),
    should = test.should
    
var dnsjs = require('dnsjs')
var nmcpp = require('nmcpp')
var nmcns = require('../lib/index.js')

/* Tests
============================================================================= */

describe('[1000] Examples', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] resolve all', function(done) {
        var debug = require('debug')('nmcns:test-0010-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "us": {
                            "email": "alice@example.bit",
                            "ip": ["8.8.8.8", "8.8.4.4"],
                            "ip6": ["2001:4860:4860::8888", "2001:4860:4860::8844"],
                            "info": ["v=spf1 include:_spf.google.com ~all"],
                            "service": [
                                [ "domain", "udp", 10, 0, 53, "ns.@" ],
                                [ "smtp", "tcp", 10, 0, 25, "ASPMX.L.GOOGLE.COM." ],
                            ],
                        },
                        "*": {
                            "alias": "us.@"
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug,
                defaults: {
                    soa: {
                        refresh: 600,
                        retry: 600,
                        expire: 600,
                        minttl: 300
                    }
                }
            })
            
            async.parallel({
                'A': function(callback) {
                    dns.resolve4('eu.domain.bit', callback)
                },
                'AAAA': function(callback) {
                    dns.resolve6('eu.domain.bit', callback)
                },
                'CNAME': function(callback) {
                    dns.resolveCname('eu.domain.bit', callback)
                },
                'NS': function(callback) {
                    dns.resolveNs('eu.domain.bit', callback)
                },
                'MX': function(callback) {
                    dns.resolveMx('eu.domain.bit', callback)
                },
                'TXT': function(callback) {
                    dns.resolveTxt('eu.domain.bit', callback)
                },
                'SOA': function(callback) {
                    dns.resolveSoa('eu.domain.bit', callback)
                },
                'SRV': function(callback) {
                    dns.resolveSrv('_domain._udp.eu.domain.bit', callback)
                }
            },
            function(err, results) {
                if (err) { return (err) }
                
                test.dump(results)
                
                done()
            });
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})