# Doesn't allow to write .only() in tests (restrict-only-in-tests)

## Rule Details

This rule doesn't allow to write .only() in tests. This is usefull to remove .only() methods before committing for CI.

The following patterns are considered warnings:

it.only()
describe.only()

The following patterns are not warnings:

describe(function() {
    it(function(done) {
      // tests here
    });
})
