"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function isObject() {
    expect(is_1.Is.obj("")).toBe(false);
    expect(is_1.Is.obj(false)).toBe(false);
    expect(is_1.Is.obj(function () { })).toBe(false);
    expect(is_1.Is.obj([])).toBe(false);
    expect(is_1.Is.obj({})).toBe(true);
    expect(is_1.Is.obj(undefined)).toBe(false);
    expect(is_1.Is.obj(null)).toBe(false);
    expect(is_1.Is.obj(new Error)).toBe(true);
}
exports.isObject = isObject;
