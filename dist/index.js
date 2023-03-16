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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.VBox = exports.HBox = exports.Flex = exports.Box = exports.LayoutContext = exports.Layout = exports.propTypes = exports.getPropsWithLayout = void 0;
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Layout_1 = __importStar(require("./Layout"));
Object.defineProperty(exports, "getPropsWithLayout", { enumerable: true, get: function () { return Layout_1.getPropsWithLayout; } });
Object.defineProperty(exports, "propTypes", { enumerable: true, get: function () { return Layout_1.propTypes; } });
Object.defineProperty(exports, "LayoutContext", { enumerable: true, get: function () { return Layout_1.LayoutContext; } });
Object.defineProperty(exports, "Layout", { enumerable: true, get: function () { return Layout_1.default; } });
var componentPropTypes = __assign({ as: prop_types_1.default.string }, Layout_1.propTypes);
var Box = function (_a) {
    var as = _a.as, children = _a.children, rest = __rest(_a, ["as", "children"]);
    var config = (0, react_1.useContext)(Layout_1.LayoutContext);
    return (0, react_1.createElement)(as || 'div', (0, Layout_1.getPropsWithLayout)(rest, undefined, config), children);
};
exports.Box = Box;
Box.displayName = 'Box';
Box.propTypes = componentPropTypes;
var Flex = function (_a) {
    var as = _a.as, children = _a.children, rest = __rest(_a, ["as", "children"]);
    var config = (0, react_1.useContext)(Layout_1.LayoutContext);
    return (0, react_1.createElement)(as || 'div', (0, Layout_1.getPropsWithLayout)(rest, { flex: true }, config), children);
};
exports.Flex = Flex;
Flex.displayName = 'Flex';
Flex.propTypes = componentPropTypes;
var HBox = function (_a) {
    var as = _a.as, children = _a.children, rest = __rest(_a, ["as", "children"]);
    var config = (0, react_1.useContext)(Layout_1.LayoutContext);
    return (0, react_1.createElement)(as || 'div', (0, Layout_1.getPropsWithLayout)(rest, { flex: true }, config), children);
};
exports.HBox = HBox;
HBox.displayName = 'HBox';
HBox.propTypes = componentPropTypes;
var VBox = function (_a) {
    var as = _a.as, children = _a.children, rest = __rest(_a, ["as", "children"]);
    var config = (0, react_1.useContext)(Layout_1.LayoutContext);
    return (0, react_1.createElement)(as || 'div', (0, Layout_1.getPropsWithLayout)(rest, { flex: true, column: true }, config), children);
};
exports.VBox = VBox;
VBox.displayName = 'VBox';
VBox.propTypes = componentPropTypes;
//# sourceMappingURL=index.js.map