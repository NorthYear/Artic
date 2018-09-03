"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isNil() {
    expect(is_1.Is.nil("")).toBe(false);
    expect(is_1.Is.nil(false)).toBe(false);
    expect(is_1.Is.nil(function () { })).toBe(false);
    expect(is_1.Is.nil([])).toBe(false);
    expect(is_1.Is.nil({})).toBe(false);
    expect(is_1.Is.nil(undefined)).toBe(true);
    expect(is_1.Is.nil(null)).toBe(true);
    expect(is_1.Is.nil(new Error)).toBe(false);
}
exports.isNil = isNil;
