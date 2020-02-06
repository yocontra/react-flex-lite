"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.keys");

exports.__esModule = true;
exports.Flex = exports.Box = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Layout = _interopRequireWildcard(require("./Layout"));

exports.getPropsWithLayout = _Layout.getPropsWithLayout;
exports.Layout = _Layout["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = {
  as: _propTypes["default"].string,
  children: _propTypes["default"].node
};

var Box =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Box, _PureComponent);

  function Box() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.render = function () {
      var _this$props = _this.props,
          as = _this$props.as,
          children = _this$props.children,
          rest = _objectWithoutPropertiesLoose(_this$props, ["as", "children"]);

      return _react["default"].createElement(as || 'div', (0, _Layout.getPropsWithLayout)(rest), children);
    };

    return _this;
  }

  var _proto = Box.prototype;

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Box;
}(_react.PureComponent);

exports.Box = Box;
Box.displayName = "Box";
Box.propTypes = propTypes;

var Flex =
/*#__PURE__*/
function (_PureComponent2) {
  _inheritsLoose(Flex, _PureComponent2);

  function Flex() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _PureComponent2.call.apply(_PureComponent2, [this].concat(args)) || this;

    _this2.render = function () {
      var _this2$props = _this2.props,
          as = _this2$props.as,
          children = _this2$props.children,
          rest = _objectWithoutPropertiesLoose(_this2$props, ["as", "children"]);

      return _react["default"].createElement(as || 'div', (0, _Layout.getPropsWithLayout)(rest, {
        flex: true
      }), children);
    };

    return _this2;
  }

  var _proto2 = Flex.prototype;

  // @ts-ignore
  _proto2.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Flex;
}(_react.PureComponent);

exports.Flex = Flex;
Flex.displayName = 'Flex';
Flex.propTypes = propTypes;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(propTypes, "propTypes", "/Users/contra/Projects/react-flex-lite/src/index.js");
  reactHotLoader.register(Box, "Box", "/Users/contra/Projects/react-flex-lite/src/index.js");
  reactHotLoader.register(Flex, "Flex", "/Users/contra/Projects/react-flex-lite/src/index.js");
  leaveModule(module);
})();

;