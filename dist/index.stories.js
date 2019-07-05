"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _react2 = require("@storybook/react");

var _jsxFileName = "/home/sam/git/stae/react-flex-lite/src/index.stories.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

(0, _react2.storiesOf)('Flex', module).add('default', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.Flex, {
    auto: true,
    align: "center",
    className: "default-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Text here'));
});