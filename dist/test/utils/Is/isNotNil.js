"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isNotNil() {
    expect(is_1.Is.notNil("")).toBe(true);
    expect(is_1.Is.notNil(false)).toBe(true);
    expect(is_1.Is.notNil(function () { })).toBe(true);
    expect(is_1.Is.notNil([])).toBe(true);
    expect(is_1.Is.notNil({})).toBe(true);
    expect(is_1.Is.notNil(undefined)).toBe(false);
    expect(is_1.Is.notNil(null)).toBe(false);
    expect(is_1.Is.notNil(new Error)).toBe(true);
}
exports.isNotNil = isNotNil;
