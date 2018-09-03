"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isArray() {
    expect(is_1.Is.arr("")).toBe(false);
    expect(is_1.Is.arr(false)).toBe(false);
    expect(is_1.Is.arr(function () { })).toBe(false);
    expect(is_1.Is.arr([])).toBe(true);
    expect(is_1.Is.arr({})).toBe(false);
    expect(is_1.Is.arr(undefined)).toBe(false);
    expect(is_1.Is.arr(null)).toBe(false);
    expect(is_1.Is.arr(new Error)).toBe(false);
}
exports.isArray = isArray;
