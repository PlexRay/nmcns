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

describe('[0010] SRV', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] request functional', function(done) {
        var debug = require('debug')('nmcns:test-0010-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "service": [
                        [ "domain", "udp", 10, 0, 53, "ns.@" ],
                        [ "domain", "udp", 20, 0, 53, "ns-a.dnschain.info." ]
                    ],
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: '_domain._udp.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.SRV,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.SRV)
                res.answer[0].should.have.property('name', '_domain._udp.domain.bit')
                res.answer[0].should.have.property('target', 'ns.domain.bit')
                res.answer[0].should.have.property('priority', 10)
                res.answer[0].should.have.property('weight', 0)
                res.answer[0].should.have.property('port', 53)

                res.answer[1].should.be.instanceof(Object)
                res.answer[1].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.SRV)
                res.answer[1].should.have.property('name', '_domain._udp.domain.bit')
                res.answer[1].should.have.property('target', 'ns-a.dnschain.info')
                res.answer[1].should.have.property('priority', 20)
                res.answer[1].should.have.property('weight', 0)
                res.answer[1].should.have.property('port', 53)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0020] resolveSrv()', function(done) {
        var debug = require('debug')('nmcns:test-0010-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "service": [
                        [ "domain", "udp", 10, 0, 53, "ns.@" ],
                        [ "domain", "udp", 20, 0, 53, "ns-a.dnschain.info." ]
                    ],
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolveSrv('_domain._udp.domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(2)
                
                addresses[0].should.be.instanceof(Object)
                addresses[0].should.have.property('name', 'ns.domain.bit')
                addresses[0].should.have.property('priority', 10)
                addresses[0].should.have.property('weight', 0)
                addresses[0].should.have.property('port', 53)

                addresses[1].should.be.instanceof(Object)
                addresses[1].should.have.property('name', 'ns-a.dnschain.info')
                addresses[1].should.have.property('priority', 20)
                addresses[1].should.have.property('weight', 0)
                addresses[1].should.have.property('port', 53)

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})