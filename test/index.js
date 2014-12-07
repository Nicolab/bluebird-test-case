'use strict';

var test  = require('unit.js');
var noder = require('./partials/index');

noder.use(require('./partials/promise'));
noder.use(require('./partials/httpRequest'));

describe('HTTP promise', function() {

  it('must be a promise', function() {
    var request = noder.$di.get('httpRequest');

    test.promise.is(request.getAsync('http://google.com')).must.be.true();
  });

  it('should work with `given()`', function(done) {
    var request = noder.$di.get('httpRequest');

    test.promise
      .given(request.getAsync('http://google.com'))
      .spread(function (res, body) {
        test
          .number(res.statusCode)
            .is(200)

          .string(body)
            .contains('google')
        ;
      })
      .catch(function (err) {
        test.fail(err.message);
      })
      .finally(done)
      .done();
  });

  it('should work with `resolve()`', function(done) {
    var request = noder.$di.get('httpRequest');

    test.promise
      .resolve(request.getAsync('http://google.com'))
      .spread(function (res, body) {
        test
          .number(res.statusCode)
            .is(200)

          .string(body)
            .contains('google')
        ;
      })
      .catch(function (err) {
        test.fail(err.message);
      })
      .finally(done)
      .done();
  });
});