"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brander_1 = require("../../../src/utils/brander");
function failWithoutAName() {
    expect(function () {
        brander_1.Brander.getClassName("");
    }).toThrow();
}
exports.failWithoutAName = failWithoutAName;
