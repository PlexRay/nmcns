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

describe('[0009] MX', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] request functional', function(done) {
        var debug = require('debug')('nmcns:test-0009-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "service": [
                                [ "smtp", "tcp", 10, 0, 25, "mx.@" ],
                                [ "smtp", "tcp", 20, 0, 25, "mx.dnschain.info." ]
                            ],
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.MX,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (err) { return done(err) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOERROR)
                
                res.should.have.property('answer')
                res.answer.should.be.instanceof(Array).and
                    .have.lengthOf(2)
                
                res.answer[0].should.be.instanceof(Object)
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.MX)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('exchange', 'mx.www.domain.bit')
                res.answer[0].should.have.property('priority', 10)

                res.answer[1].should.be.instanceof(Object)
                res.answer[1].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.MX)
                res.answer[1].should.have.property('exchange', 'mx.dnschain.info')
                res.answer[1].should.have.property('priority', 20)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0020] resolveMx()', function(done) {
        var debug = require('debug')('nmcns:test-0009-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "service": [
                                [ "smtp", "udp", 10, 0, 53, "mx.@" ],
                                [ "smtp", "udp", 20, 0, 53, "mx.dnschain.info." ]
                            ],
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolveMx('www.domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(2)
                
                addresses[0].should.have.property('exchange', 'mx.www.domain.bit')
                addresses[0].should.have.property('priority', 10)
                
                addresses[1].should.have.property('exchange', 'mx.dnschain.info')
                addresses[1].should.have.property('priority', 20)
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})