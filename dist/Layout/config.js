"use strict";

exports.__esModule = true;
exports.space = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var space = [0, 8, 16, 32, 64];
exports.space = space;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(space, "space", "/Users/contra/Projects/react-flex-lite/src/Layout/config.js");
  leaveModule(module);
})();

;