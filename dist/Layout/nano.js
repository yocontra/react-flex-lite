"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheet = exports.nano = void 0;
var nano_css_1 = require("nano-css");
var rule_1 = require("nano-css/addon/rule");
var sheet_1 = require("nano-css/addon/sheet");
var stable_1 = require("nano-css/addon/stable");
var nano = (0, nano_css_1.create)();
exports.nano = nano;
(0, stable_1.addon)(nano);
(0, rule_1.addon)(nano);
(0, sheet_1.addon)(nano);
var sheet = nano.sheet;
exports.sheet = sheet;
//# sourceMappingURL=nano.js.map