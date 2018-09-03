"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isFunction() {
    expect(is_1.Is.fn("")).toBe(false);
    expect(is_1.Is.fn(false)).toBe(false);
    expect(is_1.Is.fn(function () { })).toBe(true);
    expect(is_1.Is.fn([])).toBe(false);
    expect(is_1.Is.fn({})).toBe(false);
    expect(is_1.Is.fn(undefined)).toBe(false);
    expect(is_1.Is.fn(null)).toBe(false);
    expect(is_1.Is.fn(new Error)).toBe(false);
}
exports.isFunction = isFunction;
