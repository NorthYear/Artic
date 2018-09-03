"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../../../src/utils/is");
function getType() {
    expect(is_1.Is.type("")).toBe("string");
    expect(is_1.Is.type(false)).toBe("boolean");
    expect(is_1.Is.type(function () { })).toBe("function");
    expect(is_1.Is.type([])).toBe("array");
    expect(is_1.Is.type({})).toBe("object");
    expect(is_1.Is.type(undefined)).toBe("nil");
    expect(is_1.Is.type(null)).toBe("nil");
    expect(is_1.Is.type(new Error)).toBe("error");
}
exports.getType = getType;
