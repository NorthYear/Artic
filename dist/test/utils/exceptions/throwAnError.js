"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../../../src/utils/exceptions");
function throwAnError() {
    expect(function () {
        exceptions_1.Exceptions.articError("Whoa!! You can't do that.", "There is extra information you need to know about");
    }).toThrow();
}
exports.throwAnError = throwAnError;
