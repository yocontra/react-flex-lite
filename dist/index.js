"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = exports.Box = exports.Layout = exports.propTypes = exports.getPropsWithLayout = void 0;
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Layout_1 = __importStar(require("./Layout"));
Object.defineProperty(exports, "getPropsWithLayout", { enumerable: true, get: function () { return Layout_1.getPropsWithLayout; } });
Object.defineProperty(exports, "propTypes", { enumerable: true, get: function () { return Layout_1.propTypes; } });
Object.defineProperty(exports, "Layout", { enumerable: true, get: function () { return Layout_1.default; } });
var componentPropTypes = __assign({ as: prop_types_1.default.string, children: prop_types_1.default.node }, Layout_1.propTypes);
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            var _a = _this.props, as = _a.as, children = _a.children, rest = __rest(_a, ["as", "children"]);
            return react_1.createElement(as || 'div', Layout_1.getPropsWithLayout(__assign(__assign({}, rest), { 'data-testid': 'box' })), children);
        };
        return _this;
    }
    Box.displayName = 'Box';
    Box.propTypes = componentPropTypes;
    return Box;
}(react_1.PureComponent));
exports.Box = Box;
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            var _a = _this.props, as = _a.as, children = _a.children, rest = __rest(_a, ["as", "children"]);
            return react_1.createElement(as || 'div', Layout_1.getPropsWithLayout(__assign(__assign({}, rest), { 'data-testid': 'flex' }), { flex: true }), children);
        };
        return _this;
    }
    Flex.displayName = 'Flex';
    Flex.propTypes = componentPropTypes;
    return Flex;
}(react_1.PureComponent));
exports.Flex = Flex;
//# sourceMappingURL=index.js.map