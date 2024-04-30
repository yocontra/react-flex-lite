"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var css_vendor_1 = require("css-vendor");
var moize_1 = __importDefault(require("moize"));
var nano_1 = require("./nano");
// detect IE 6 - 11
var isOldIE = typeof navigator !== 'undefined' &&
    (navigator.userAgent.indexOf('MSIE') !== -1 ||
        navigator.userAgent.indexOf('Trident') !== -1);
var fixIE = function (css) {
    if (!isOldIE || css.display !== 'flex')
        return css; // dont need to do anything
    return __assign({ 'min-width': '0%' }, css);
};
var msheet = moize_1.default.deep(nano_1.sheet, { maxSize: 1024 });
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
var num = function (n) { return typeof n === 'number' && !isNaN(n); };
var px = function (n) { return (num(n) ? "".concat(n, "px") : n); };
var heightWidth = function (n) { return (!num(n) || n > 1 ? px(n) : "".concat(n * 100, "%")); };
var scaleValue = function (n, config) {
    var neg = n < 0 ? -1 : 1;
    return !num(n) ? n : (config.space[Math.abs(n)] || Math.abs(n)) * neg;
};
var decl = function (k, v) {
    var _a;
    if (!k || v == null)
        return {};
    var nk = (0, css_vendor_1.supportedProperty)(k);
    var nv = (0, css_vendor_1.supportedValue)(k, v);
    if (!nk || nv == null)
        return {}; // totally unsupported
    return _a = {}, _a[nk] = nv, _a;
};
var rules = [
    // spacing shorthands
    {
        match: new RegExp("^[".concat(Object.keys(spacingTypes).join(''), "][").concat(Object.keys(directions).join(''), "]?$")),
        map: function (n, key, props, config) {
            var _a = key.split(''), type = _a[0], dir = _a[1];
            var prop = spacingTypes[type];
            var dirs = directions[dir] || [''];
            var val = scaleValue(n, config);
            return dirs.reduce(function (prev, d) { return (__assign(__assign({}, prev), decl(d ? "".concat(prop, "-").concat(d) : prop, px(val)))); }, {});
        }
    },
    // height and width shorthands
    {
        match: 'h',
        map: function (n) { return decl('height', heightWidth(n)); }
    },
    {
        match: 'w',
        map: function (n) { return decl('width', heightWidth(n)); }
    },
    // flexbox specific attributes
    {
        match: 'flex',
        map: function (n, k, others) {
            var flex = others.inline ? 'inline-flex' : 'flex';
            return decl('display', n ? flex : 'block');
        }
    },
    {
        match: 'wrap',
        map: function (n) { return decl('flex-wrap', n ? 'wrap' : 'nowrap'); }
    },
    {
        match: 'reverse',
        map: function (n, k, others) {
            if (others.column)
                return {}; // column rule will handle it
            return decl('flex-direction', n ? 'row-reverse' : undefined);
        }
    },
    {
        match: 'column',
        map: function (n, k, others) {
            var base = others.reverse ? 'column-reverse' : 'column';
            return decl('flex-direction', n ? base : undefined);
        }
    },
    {
        match: 'align',
        map: function (n) { return decl('align-items', n); }
    },
    {
        match: 'alignContent',
        map: function (n) { return decl('align-content', n); }
    },
    {
        match: 'alignSelf',
        map: function (n) { return decl('align-self', n); }
    },
    {
        match: 'justify',
        map: function (n) { return decl('justify-content', n); }
    },
    {
        match: 'order',
        map: function (n) { return decl('order', n); }
    },
    {
        match: 'shrink',
        map: function (n) { return decl('flex-shrink', +n); }
    },
    {
        match: 'grow',
        map: function (n) { return decl('flex-grow', +n); }
    },
    {
        match: 'basis',
        map: function (n) { return decl('flex-basis', n); }
    },
    // flexbox shorthands
    {
        match: 'auto',
        map: function (n) { return decl('flex', n ? '1 1 auto' : undefined); }
    },
    {
        match: 'hcenter',
        map: function (n, k, others) {
            return n
                ? others.column
                    ? decl('align-items', 'center')
                    : decl('justify-content', 'center')
                : {};
        }
    },
    {
        match: 'vcenter',
        map: function (n, k, others) {
            return n
                ? others.column
                    ? decl('justify-content', 'center')
                    : decl('align-items', 'center')
                : {};
        }
    },
    {
        match: 'center',
        map: function (n) {
            return n
                ? __assign(__assign({}, decl('justify-content', 'center')), decl('align-items', 'center')) : {};
        }
    }
];
exports.default = moize_1.default.deep(function (props, config) {
    var css = Object.entries(props).reduce(function (prev, _a) {
        var k = _a[0], v = _a[1];
        rules.forEach(function (rule) {
            if (typeof rule.match === 'string') {
                if (k === rule.match) {
                    prev = __assign(__assign({}, prev), rule.map(v, k, props, config));
                }
                return;
            }
            if (rule.match.test(k)) {
                prev = __assign(__assign({}, prev), rule.map(v, k, props, config));
            }
        });
        return prev;
    }, {});
    return Object.keys(css).length ? msheet({ flex: fixIE(css) }).flex : undefined;
});
//# sourceMappingURL=getStyle.js.map