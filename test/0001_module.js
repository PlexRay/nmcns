/* -*- coding: utf-8 -*-
============================================================================= */
/*jshint asi: true*/
/*jshint -W030 */

var test = global.unitjs || require('unit.js'),
    should = test.should

/* Tests
============================================================================= */

describe('[0001] Module', function() {

    it('[0000] available', function(done) {

        var nmcns = require('../lib/index.js')

        nmcns
            .should.be.an.instanceOf(Object)
        nmcns
            .should.be.an.instanceOf(nmcns.Resolver)

        done()
    })
})