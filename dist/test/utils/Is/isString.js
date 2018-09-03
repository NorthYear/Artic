"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isString() {
    expect(is_1.Is.str("")).toBe(true);
    expect(is_1.Is.str(false)).toBe(false);
    expect(is_1.Is.str(function () { })).toBe(false);
    expect(is_1.Is.str([])).toBe(false);
    expect(is_1.Is.str({})).toBe(false);
    expect(is_1.Is.str(undefined)).toBe(false);
    expect(is_1.Is.str(null)).toBe(false);
    expect(is_1.Is.str(new Error)).toBe(false);
}
exports.isString = isString;
