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

describe('[0002] Request', function() {

    it('[0000] handles invalid request type', function(done) {
        var debug = require('debug')('nmcns:test-0002-0000')
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
                type: 'INVALID'
            }, function(err, res) {
                err.should.be.instanceof(Error)
                err.should.have.property('code', dnsjs.FORMERR)

                done()
            })
        } catch(exc) {
            console.log(exc)
            done(exc)
        }
    })
})