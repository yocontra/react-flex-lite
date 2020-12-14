"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports.default = void 0;

var _cssVendor = require("css-vendor");

var _moize = _interopRequireDefault(require("moize"));

var _nano = require("./nano");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// detect IE 6 - 11
var isOldIE = typeof navigator !== 'undefined' && (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') !== -1);

var fixIE = function fixIE(css) {
  if (!isOldIE || css.display !== 'flex') return css; // dont need to do anything

  return Object.assign({
    'min-width': '0%'
  }, css);
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
      return Object.assign({}, prev, decl(d ? prop + "-" + d : prop, px(val)));
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
    return n ? Object.assign({}, decl('justify-content', 'center'), decl('align-items', 'center')) : {};
  }
}];

var _default = _moize.default.deep(function (props) {
  var css = Object.entries(props).reduce(function (prev, _ref2) {
    var k = _ref2[0],
        v = _ref2[1];
    rules.forEach(function (rule) {
      if (typeof rule.match === 'string') {
        if (k === rule.match) {
          prev = Object.assign({}, prev, rule.map(v, k, props));
        }

        return;
      }

      if (rule.match.test(k)) {
        prev = Object.assign({}, prev, rule.map(v, k, props));
      }
    });
    return prev;
  }, {});
  return Object.keys(css).length ? mrule(fixIE(css)) : undefined;
});

exports.default = _default;
module.exports = exports.default;