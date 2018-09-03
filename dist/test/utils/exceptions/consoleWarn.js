"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../../../src/utils/exceptions");
function consoleWarn(done) {
    var warn = jest.spyOn(console, "warn").mockImplementationOnce(function () {
        done();
    });
    exceptions_1.Exceptions.articWarning("Whoa!! You can't do that.", "There is extra information you need to know about");
    expect(warn).toBeCalled();
}
exports.consoleWarn = consoleWarn;
