"use strict";
var rule = require("../../../lib/rules/restrict-only-in-tests"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("restrict-only-in-tests", rule, {

    valid: [
      'it(function(done) {})',
      'describe(function() {})',
      'describe(function() { it(function(done) {}); })',
    ],

    invalid: [
        {
            code: "it.only()",
            errors: [{
                message: "Remove it.only() before committing",
            }]
        }, {
            code: "describe.only()",
            errors: [{
                message: "Remove describe.only() before committing",
            }]
        }, {
            code: "describe.only(function() { it.only(function(done) {}); })",
            errors: [{
                message: "Remove describe.only() before committing",
            }, {
                message: "Remove it.only() before committing",
            }]
        }
    ]
});
