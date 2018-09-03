"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function stringLength() {
    expect(is_1.Is.strLength("123456789", 9)).toBe(true);
    expect(is_1.Is.strLength("123", 3)).toBe(true);
    expect(is_1.Is.strLength("1234", 3)).toBe(false);
    expect(is_1.Is.strLength("1", 2)).toBe(false);
}
exports.stringLength = stringLength;
