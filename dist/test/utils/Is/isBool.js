"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isBool() {
    expect(is_1.Is.bool("")).toBe(false);
    expect(is_1.Is.bool(false)).toBe(true);
    expect(is_1.Is.bool(function () { })).toBe(false);
    expect(is_1.Is.bool([])).toBe(false);
    expect(is_1.Is.bool({})).toBe(false);
    expect(is_1.Is.bool(undefined)).toBe(false);
    expect(is_1.Is.bool(null)).toBe(false);
    expect(is_1.Is.bool(new Error)).toBe(false);
}
exports.isBool = isBool;
