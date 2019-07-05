"use strict";

exports.__esModule = true;
exports.default = void 0;

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.constructor");

var _cssVendor = require("css-vendor");

var _moize = _interopRequireDefault(require("moize"));

var _nano = require("./nano");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var mrule = _moize.default.deep(_nano.rule);

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
      return _objectSpread({}, prev, decl(d ? prop + "-" + d : prop, px(val)));
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
    return n ? _objectSpread({}, decl('justify-content', 'center'), decl('align-items', 'center')) : {};
  }
}];

var _default = _moize.default.deep(function (props) {
  var css = Object.entries(props).reduce(function (prev, _ref2) {
    var k = _ref2[0],
        v = _ref2[1];
    rules.forEach(function (rule) {
      if (typeof rule.match === 'string') {
        if (k === rule.match) {
          prev = _objectSpread({}, prev, rule.map(v, k, props));
        }

        return;
      }

      if (rule.match.test(k)) {
        prev = _objectSpread({}, prev, rule.map(v, k, props));
      }
    });
    return prev;
  }, {});
  return Object.keys(css).length ? mrule(css) : undefined;
});

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mrule, "mrule", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(directions, "directions", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(spacingTypes, "spacingTypes", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(num, "num", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(px, "px", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(heightWidth, "heightWidth", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(scaleValue, "scaleValue", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(decl, "decl", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(rules, "rules", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
  reactHotLoader.register(_default, "default", "/home/sam/git/stae/react-flex-lite/src/Layout/getStyle.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();

module.exports = exports.default;