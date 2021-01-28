"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = exports.put = exports.nano = void 0;
var nano_css_1 = require("nano-css");
var rule_1 = require("nano-css/addon/rule");
var nano = nano_css_1.create();
exports.nano = nano;
rule_1.addon(nano);
var put = nano.put, rule = nano.rule;
exports.put = put;
exports.rule = rule;
//# sourceMappingURL=nano.js.map