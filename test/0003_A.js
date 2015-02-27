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

describe('[0003] A', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] non-existent domain', function(done) {
        var debug = require('debug')('nmcns:test-0003-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'nonexistent.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {

                //test.dump(err)
                //test.dump(res)
                
                err.should.be.instanceof(Error)
                err.should.have.property('code', dnsjs.NOTFOUND)
                
                res.should.have.property('header')
                res.header.should.be.instanceof(Object)
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOTFOUND)
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0020] non-existent address', function(done) {
        var debug = require('debug')('nmcns:test-0003-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "map": {
                        "www": {
                            "email": "alice@domain.bit",
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {

                //test.dump(err)
                //test.dump(res)
                
                err.should.be.instanceof(Error)
                err.should.have.property('code', dnsjs.NOTFOUND)
                
                res.should.have.property('header')
                res.header.should.be.instanceof(Object)
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOTFOUND)
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0040] alias to a visible name', function(done) {
        var debug = require('debug')('nmcns:test-0003-0040')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "ip": "8.8.8.8",
                    "map": {
                        "*": {
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
                type: dnsjs.consts.NAME_TO_QTYPE.A,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.CNAME)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('data', 'domain.bit')
                
                res.answer[1].should.be.instanceof(Object)
                res.answer[1].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.A)
                res.answer[1].should.have.property('name', 'domain.bit')
                res.answer[1].should.have.property('address', '8.8.8.8')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0060] alias to an invisible name', function(done) {
        var debug = require('debug')('nmcns:test-0003-0060')
        try {
            nmcpp.cleanup()
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "*": {
                            "alias": "external.domain."
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.CNAME)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('data', 'external.domain')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0080] alias to a non-existent name', function(done) {
        var debug = require('debug')('nmcns:test-0003-0080')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "alias": "ftp.@"
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.CNAME)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('data', 'ftp.domain.bit')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })    
    
    it('[1000] single addresses', function(done) {
        var debug = require('debug')('nmcns:test-0003-1000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
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
                type: dnsjs.consts.NAME_TO_QTYPE.A,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.A)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('address', '8.8.8.8')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[1020] multiple addresses', function(done) {
        var debug = require('debug')('nmcns:test-0003-1020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "ip": ["8.8.8.8", "8.8.4.4"]
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.A)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('address', '8.8.8.8')
                
                res.answer[1].should.be.instanceof(Object)
                res.answer[1].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.A)
                res.answer[1].should.have.property('name', 'www.domain.bit')
                res.answer[1].should.have.property('address', '8.8.4.4')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[1040] invalid addresses', function(done) {
        var debug = require('debug')('nmcns:test-0003-1040')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "ip": ["8.8.8.8", null, 42, {}, [], 'qqq', '::1']
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
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
                res.answer[0].should.have.property('type', dnsjs.consts.NAME_TO_QTYPE.A)
                res.answer[0].should.have.property('name', 'www.domain.bit')
                res.answer[0].should.have.property('address', '8.8.8.8')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[1060] invalid data', function(done) {
        var debug = require('debug')('nmcns:test-0003-1060')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "ip": null
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.request({
                name: 'www.domain.bit',
                type: dnsjs.consts.NAME_TO_QTYPE.A,
                class: dnsjs.consts.NAME_TO_QCLASS.IN
            }, function(err, res) {
                if (!err) { return done('Must fail') }
                
                //test.dump(res)

                res.should.be.instanceof(Object)
                
                res.should.have.property('header')
                res.header.should.be.instanceof(Object)
                res.header.should.have.property('rcode', dnsjs.consts.NAME_TO_RCODE.NOTFOUND)
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[2000] resolve4()', function(done) {
        var debug = require('debug')('nmcns:test-0003-2000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "www": {
                            "ip": ['8.8.8.8']
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolve4('www.domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                addresses.should.have.property(0, '8.8.8.8')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})