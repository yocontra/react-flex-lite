"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports.default = exports.getPropsWithLayout = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _lodash2 = _interopRequireDefault(require("lodash.omit"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getStyle = _interopRequireDefault(require("./getStyle"));

var _this = void 0,
    _jsxFileName = "/Users/contra/Projects/react-flex-lite/src/Layout/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var fullProps = defaultProps ? _objectSpread(_objectSpread({}, defaultProps), props) : props;
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
  var out = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
    var nprops = getPropsWithLayout(props, defaultProps);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(InputComponent, _objectSpread({
      ref: ref
    }, nprops));
  });

  (0, _hoistNonReactStatics.default)(out, InputComponent);
  var name = InputComponent.displayName || InputComponent.name;
  out.displayName = name ? "Layout(" + name + ")" : 'Layout';
  out.propTypes = InputComponent.propTypes ? _objectSpread(_objectSpread({}, InputComponent.propTypes), propTypes) : propTypes;
  return out;
};

var _default = Layout;
exports.default = _default;