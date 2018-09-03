"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isError() {
    expect(is_1.Is.err("")).toBe(false);
    expect(is_1.Is.err(false)).toBe(false);
    expect(is_1.Is.err(function () { })).toBe(false);
    expect(is_1.Is.err([])).toBe(false);
    expect(is_1.Is.err({})).toBe(false);
    expect(is_1.Is.err(undefined)).toBe(false);
    expect(is_1.Is.err(null)).toBe(false);
    expect(is_1.Is.err(new Error)).toBe(true);
}
exports.isError = isError;
