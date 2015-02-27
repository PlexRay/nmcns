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

describe('[0007] TXT', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] non-existent info', function(done) {
        var debug = require('debug')('nmcns:test-0007-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "alias": ""
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.TXT,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (!err) { return done(new Error('Must fail')) }
                
                //test.dump(err)
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
    
    it('[0020] single info record', function(done) {
        var debug = require('debug')('nmcns:test-0007-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "info": "v=spf1 include:_spf.google.com ~all"
                            //blitz=mu-23ab8509-150c7ed1-9128b8e8-5e5c6fe9
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.TXT,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (err) { return done(err) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.be.instanceof(Object)
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOERROR)
                
                res.should.have.property('answer')
                res.answer.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                
                res.answer[0].should.be.instanceof(Object)
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.TXT)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('data', 'v=spf1 include:_spf.google.com ~all')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[0040] miltiple info records', function(done) {
        var debug = require('debug')('nmcns:test-0007-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "info": [
                                "v=spf1 include:_spf.google.com ~all",
                                "blitz=mu-23ab8509-150c7ed1-9128b8e8-5e5c6fe9"
                            ]
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.TXT,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (err) { return done(err) }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.be.instanceof(Object)
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOERROR)
                
                res.should.have.property('answer')
                res.answer.should.be.instanceof(Array).and
                    .have.lengthOf(2)
                
                res.answer[0].should.be.instanceof(Object)
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.TXT)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('data', 'v=spf1 include:_spf.google.com ~all')
                
                res.answer[1].should.be.instanceof(Object)
                res.answer[1].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.TXT)
                res.answer[1].should.have.property('name', 'www.domain.bit')
                res.answer[1].should.have.property('data', 'blitz=mu-23ab8509-150c7ed1-9128b8e8-5e5c6fe9')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[2000] resolveTxt()', function(done) {
        var debug = require('debug')('nmcns:test-0007-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "info": [
                                "v=spf1 include:_spf.google.com ~all",
                                "blitz=mu-23ab8509-150c7ed1-9128b8e8-5e5c6fe9"
                            ]
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolveTxt('www.domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(2)
                
                addresses[0].should.be.instanceof(Array).and.have.lengthOf(1)
                addresses[0].should.have.property(0, 'v=spf1 include:_spf.google.com ~all')
                    
                addresses[1].should.be.instanceof(Array).and.have.lengthOf(1)
                addresses[1].should.have.property(0, 'blitz=mu-23ab8509-150c7ed1-9128b8e8-5e5c6fe9')

                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})