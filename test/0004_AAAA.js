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

describe('[0004] AAAA', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] request works', function(done) {
        var debug = require('debug')('nmcns:test-0004-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "ip6": ["8.8.8.8", null, 42, {}, [], 'qqq', '::1']
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.AAAA,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.AAAA)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('address', '::1')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[2000] resolve6()', function(done) {
        var debug = require('debug')('nmcns:test-0004-2000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "ip6": ['::1']
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolve6('www.domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                addresses.should.have.property(0, '::1')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})