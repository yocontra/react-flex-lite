"use strict";

exports.__esModule = true;
exports.rule = exports.put = exports.nano = void 0;

var _nanoCss = require("nano-css");

var _rule = require("nano-css/addon/rule");

var nano = (0, _nanoCss.create)();
exports.nano = nano;
(0, _rule.addon)(nano);
var put = nano.put,
    rule = nano.rule;
exports.rule = rule;
exports.put = put;