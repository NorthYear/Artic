"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../../../src/utils/exceptions");
function nonErrorPass() {
    expect(function () {
        exceptions_1.Exceptions.error(null);
    }).not.toThrow();
}
exports.nonErrorPass = nonErrorPass;
