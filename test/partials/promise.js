'use strict';

module.exports.__noder = function promisePlugin(noder) {

  // returns Noder instance
  return noder.$require('Promise', 'bluebird');
};