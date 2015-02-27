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

describe('[0005] CNAME', function() {
    beforeEach(function(done) {
        nmcpp.cleanup()
        done()
    });
    
    it('[0000] request works', function(done) {
        var debug = require('debug')('nmcns:test-0005-0000')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "ftp": {
                            "ip": ["8.8.8.8"]  
                        },
                        "*": {
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
                type: dnsjs.consts.NAME_TO_QTYPE.CNAME,
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

    it('[0020] resolve non-existent alias', function(done) {
        var debug = require('debug')('nmcns:test-0005-0020')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "*": {
                            "ip": ["8.8.8.8"]  
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolveCname('www.domain.bit', function(err, addresses) {
                if (!err) { return done('Must fail') }
                
                //test.dump(addresses)

                err.should.be.instanceof(Error)
                err.should.have.property('code', dnsjs.NOTFOUND)
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0040] resolve alias', function(done) {
        var debug = require('debug')('nmcns:test-0005-0040')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "ftp": {
                            "ip": ["8.8.8.8"]  
                        },
                        "*": {
                            "alias": "ftp.@"
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolve('www.domain.bit', 'CNAME', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                addresses.should.have.property(0, 'ftp.domain.bit')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })

    it('[0040] resolve alias', function(done) {
        var debug = require('debug')('nmcns:test-0005-0040')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "ftp": {
                            "ip": ["8.8.8.8"]  
                        },
                        "*": {
                            "alias": "ftp.@"
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolve('www.domain.bit', 'CNAME', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                addresses.should.have.property(0, 'ftp.domain.bit')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
    
    it('[2000] resolveCname()', function(done) {
        var debug = require('debug')('nmcns:test-0005-0040')
        try {
            var bit = new nmcpp.TestProvider({
                debug: debug,
                gtld: 'bit'
            }, {
                "d/domain": {
                    "email": "alice@domain.bit",
                    "map": {
                        "ftp": {
                            "ip": ["8.8.8.8"]  
                        },
                        "*": {
                            "alias": "ftp.@"
                        }
                    }
                }
            })
            
            var dns = new nmcns.Resolver({
                debug: debug
            })
            
            dns.resolveCname('www.domain.bit', function(err, addresses) {
                if (err) { return done(err) }
                
                //test.dump(addresses)

                addresses.should.be.instanceof(Array).and
                    .have.lengthOf(1)
                addresses.should.have.property(0, 'ftp.domain.bit')
                
                done()
            })
        } catch(exc) {
            console.log(exc.stack)
            done(exc)
        }
    })
})