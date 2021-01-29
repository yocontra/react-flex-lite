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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropsWithLayout = exports.propTypes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var lodash_pick_1 = __importDefault(require("lodash.pick"));
var lodash_omit_1 = __importDefault(require("lodash.omit"));
var classnames_1 = __importDefault(require("classnames"));
var hoist_non_react_statics_1 = __importDefault(require("hoist-non-react-statics"));
var getStyle_1 = __importDefault(require("./getStyle"));
var px = prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]);
exports.propTypes = {
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
    flex: prop_types_1.default.bool,
    inline: prop_types_1.default.bool,
    wrap: prop_types_1.default.bool,
    reverse: prop_types_1.default.bool,
    column: prop_types_1.default.bool,
    align: prop_types_1.default.oneOf([
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'baseline',
        'initial',
        'inherit'
    ]),
    alignContent: prop_types_1.default.oneOf([
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'initial',
        'inherit'
    ]),
    alignSelf: prop_types_1.default.oneOf([
        'auto',
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'baseline',
        'initial',
        'inherit'
    ]),
    justify: prop_types_1.default.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'initial',
        'inherit'
    ]),
    order: prop_types_1.default.number,
    shrink: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.number]),
    grow: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.number]),
    basis: prop_types_1.default.number,
    auto: prop_types_1.default.bool,
    center: prop_types_1.default.bool
};
// this ordering is important, it determines how rules are applied
var ourProps = [
    'm',
    'mb',
    'mt',
    'mr',
    'ml',
    'mx',
    'my',
    'p',
    'pb',
    'pt',
    'pr',
    'pl',
    'px',
    'py',
    'w',
    'h',
    'flex',
    'wrap',
    'auto',
    'center',
    'reverse',
    'alignSelf',
    'alignContent',
    'basis',
    'grow',
    'shrink',
    'center',
    'column',
    'align',
    'justify',
    'order',
    'inline'
];
var ourPropsWithExtra = __spreadArrays(ourProps, ['className']);
/**
 * Function used to generate a className for the component as well
 * as strip out any non-style props
 * @param props
 * @param defaultProps
 * @returns {object} returns a className and any other non-style props
 */
var getPropsWithLayout = function (props, defaultProps) {
    var fullProps = defaultProps ? __assign(__assign({}, defaultProps), props) : props;
    var passThrough = lodash_omit_1.default(props, ourPropsWithExtra);
    var styleProps = lodash_pick_1.default(fullProps, ourProps);
    if (Object.keys(styleProps).length === 0)
        return props;
    var ourClass = getStyle_1.default(styleProps);
    var className = props.className
        ? classnames_1.default(ourClass, props.className)
        : ourClass;
    return __assign({ className: className }, passThrough);
};
exports.getPropsWithLayout = getPropsWithLayout;
var Layout = function (InputComponent, defaultProps) {
    var out = react_1.forwardRef(function (props, ref) {
        var nprops = exports.getPropsWithLayout(props, defaultProps);
        return jsx_runtime_1.jsx(InputComponent, __assign({ ref: ref }, nprops), void 0);
    });
    hoist_non_react_statics_1.default(out, InputComponent);
    var name = InputComponent.displayName || InputComponent.name;
    out.displayName = name ? "Layout(" + name + ")" : 'Layout';
    out.propTypes = InputComponent.propTypes
        ? __assign(__assign({}, InputComponent.propTypes), exports.propTypes) : exports.propTypes; // TODO FIX ME
    return out;
};
exports.default = Layout;
//# sourceMappingURL=index.js.map