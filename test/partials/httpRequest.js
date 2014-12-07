'use strict';

module.exports.__noder = function requestPlugin(noder) {

  // returns Noder instance
  return noder.$factory('httpRequest', function() {
    return noder.Promise.promisifyAll(require('request'));
  });
};