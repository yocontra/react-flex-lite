"use strict";

exports.__esModule = true;
exports.default = exports.getPropsWithLayout = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _lodash2 = _interopRequireDefault(require("lodash.omit"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getStyle = _interopRequireDefault(require("./getStyle"));

var _jsxFileName = "/Users/contra/Projects/react-flex-lite/src/Layout/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var px = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]);

var propTypes = {
  m: px,
  mb: px,
  mt: px,
  mr: px,
  ml: px,
  mx: px,
  my: px,
  p: px,
  pb: px,
  pt: px,
  pr: px,
  pl: px,
  px: px,
  py: px,
  h: px,
  w: px,
  flex: _propTypes.default.bool,
  inline: _propTypes.default.bool,
  wrap: _propTypes.default.bool,
  reverse: _propTypes.default.bool,
  column: _propTypes.default.bool,
  align: _propTypes.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
  alignContent: _propTypes.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'initial', 'inherit']),
  alignSelf: _propTypes.default.oneOf(['auto', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
  justify: _propTypes.default.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'initial', 'inherit']),
  order: _propTypes.default.number,
  shrink: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  grow: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  basis: _propTypes.default.number,
  auto: _propTypes.default.bool,
  center: _propTypes.default.bool
};
var ourProps = ['m', 'mb', 'mt', 'mr', 'ml', 'mx', 'my', 'p', 'pb', 'pt', 'pr', 'pl', 'px', 'py', 'w', 'h', 'flex', 'wrap', 'auto', 'center', 'reverse', 'alignSelf', 'alignContent', 'basis', 'grow', 'shrink', 'center', 'column', 'align', 'justify', 'order', 'inline'];
var ourPropsWithExtra = [].concat(ourProps, ['className']);

var getPropsWithLayout = function getPropsWithLayout(props, defaultProps) {
  var fullProps = defaultProps ? _objectSpread({}, defaultProps, {}, props) : props;
  var passThrough = (0, _lodash2.default)(props, ourPropsWithExtra);
  var styleProps = (0, _lodash.default)(fullProps, ourProps);
  if (Object.keys(styleProps).length === 0) return props;
  var ourClass = (0, _getStyle.default)(styleProps);
  var className = props.className ? (0, _classnames.default)(ourClass, props.className) : ourClass;
  return _objectSpread({
    className: className
  }, passThrough);
};

exports.getPropsWithLayout = getPropsWithLayout;

var Layout = function Layout(InputComponent, defaultProps) {
  var out = _react.default.forwardRef(function (props, ref) {
    var nprops = getPropsWithLayout(props, defaultProps);
    return _react.default.createElement(InputComponent, _extends({
      ref: ref
    }, nprops, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    }));
  });

  (0, _hoistNonReactStatics.default)(out, InputComponent);
  var name = InputComponent.displayName || InputComponent.name;
  out.displayName = name ? "Layout(" + name + ")" : 'Layout';
  out.propTypes = propTypes;
  return out;
};

var _default = Layout;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(px, "px", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  reactHotLoader.register(propTypes, "propTypes", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  reactHotLoader.register(ourProps, "ourProps", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  reactHotLoader.register(ourPropsWithExtra, "ourPropsWithExtra", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  reactHotLoader.register(getPropsWithLayout, "getPropsWithLayout", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  reactHotLoader.register(Layout, "Layout", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  reactHotLoader.register(_default, "default", "/Users/contra/Projects/react-flex-lite/src/Layout/index.js");
  leaveModule(module);
})();

;