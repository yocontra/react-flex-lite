"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.reverse");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports["default"] = void 0;

var _cssVendor = require("css-vendor");

var _moize = _interopRequireDefault(require("moize"));

var _nano = require("./nano");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// detect IE 6 - 11
var isOldIE = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') !== -1;

var fixIE = function fixIE(css) {
  if (!isOldIE || css.display !== 'flex') return css; // dont need to do anything

  return _objectSpread({
    'min-width': '0%'
  }, css);
};

var mrule = _moize["default"].deep(_nano.rule);

var directions = {
  t: ['top'],
  r: ['right'],
  b: ['bottom'],
  l: ['left'],
  x: ['left', 'right'],
  y: ['top', 'bottom']
};
var spacingTypes = {
  m: 'margin',
  p: 'padding'
};

var num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};

var px = function px(n) {
  return num(n) ? n + "px" : n;
};

var heightWidth = function heightWidth(n) {
  return !num(n) || n > 1 ? px(n) : n * 100 + "%";
};

var scaleValue = function scaleValue(n) {
  var neg = n < 0 ? -1 : 1;
  return !num(n) ? n : (_config.space[Math.abs(n)] || Math.abs(n)) * neg;
};

var decl = function decl(k, v) {
  var _ref;

  if (!k || v == null) return {};
  var nk = (0, _cssVendor.supportedProperty)(k);
  var nv = (0, _cssVendor.supportedValue)(k, v);
  if (!nk || nv == null) return {}; // totally unsupported

  return _ref = {}, _ref[nk] = nv, _ref;
};

var rules = [// spacing shorthands
{
  match: new RegExp("^[" + Object.keys(spacingTypes).join('') + "][" + Object.keys(directions).join('') + "]?$"),
  map: function map(n, key) {
    var _key$split = key.split(''),
        type = _key$split[0],
        dir = _key$split[1];

    var prop = spacingTypes[type];
    var dirs = directions[dir] || [''];
    var val = scaleValue(n);
    return dirs.reduce(function (prev, d) {
      return _objectSpread({}, prev, {}, decl(d ? prop + "-" + d : prop, px(val)));
    }, {});
  }
}, // height and width shorthands
{
  match: 'h',
  map: function map(n) {
    return decl('height', heightWidth(n));
  }
}, {
  match: 'w',
  map: function map(n) {
    return decl('width', heightWidth(n));
  }
}, // flexbox specific attributes
{
  match: 'flex',
  map: function map(n, k, others) {
    var flex = others.inline ? 'inline-flex' : 'flex';
    return decl('display', n ? flex : 'block');
  }
}, {
  match: 'wrap',
  map: function map(n) {
    return decl('flex-wrap', n ? 'wrap' : 'nowrap');
  }
}, {
  match: 'reverse',
  map: function map(n, k, others) {
    if (others.column) return {}; // column rule will handle it

    return decl('flex-direction', n ? 'row-reverse' : undefined);
  }
}, {
  match: 'column',
  map: function map(n, k, others) {
    var base = others.reverse ? 'column-reverse' : 'column';
    return decl('flex-direction', n ? base : undefined);
  }
}, {
  match: 'align',
  map: function map(n) {
    return decl('align-items', n);
  }
}, {
  match: 'alignContent',
  map: function map(n) {
    return decl('align-content', n);
  }
}, {
  match: 'alignSelf',
  map: function map(n) {
    return decl('align-self', n);
  }
}, {
  match: 'justify',
  map: function map(n) {
    return decl('justify-content', n);
  }
}, {
  match: 'order',
  map: function map(n) {
    return decl('order', n);
  }
}, {
  match: 'shrink',
  map: function map(n) {
    return decl('flex-shrink', +n);
  }
}, {
  match: 'grow',
  map: function map(n) {
    return decl('flex-grow', +n);
  }
}, {
  match: 'basis',
  map: function map(n) {
    return decl('flex-basis', n);
  }
}, // flexbox shorthands
{
  match: 'auto',
  map: function map(n) {
    return decl('flex', n ? '1 1 auto' : undefined);
  }
}, {
  match: 'center',
  map: function map(n) {
    return n ? _objectSpread({}, decl('justify-content', 'center'), {}, decl('align-items', 'center')) : {};
  }
}];

var _default = _moize["default"].deep(function (props) {
  var css = Object.entries(props).reduce(function (prev, _ref2) {
    var k = _ref2[0],
        v = _ref2[1];
    rules.forEach(function (rule) {
      if (typeof rule.match === 'string') {
        if (k === rule.match) {
          prev = _objectSpread({}, prev, {}, rule.map(v, k, props));
        }

        return;
      }

      if (rule.match.test(k)) {
        prev = _objectSpread({}, prev, {}, rule.map(v, k, props));
      }
    });
    return prev;
  }, {});
  return Object.keys(css).length ? mrule(fixIE(css)) : undefined;
});

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isOldIE, "isOldIE", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(fixIE, "fixIE", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(mrule, "mrule", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(directions, "directions", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(spacingTypes, "spacingTypes", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(num, "num", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(px, "px", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(heightWidth, "heightWidth", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(scaleValue, "scaleValue", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(decl, "decl", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(rules, "rules", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(_default, "default", "/Users/contra/Projects/react-flex-lite/src/Layout/getStyle.js");
  leaveModule(module);
})();

;
module.exports = exports.default;