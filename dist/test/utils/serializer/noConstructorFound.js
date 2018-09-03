"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = require("../../../src/utils/serializer");
function noConstructorFound(done) {
    var _this = this;
    var warn = jest.spyOn(console, "warn").mockImplementationOnce(function () {
        done();
    });
    expect(function () {
        var serializer = new serializer_1.Serializer({
            Broken: _this
        }, "testing");
        expect(warn).toBeCalled();
        serializer.parse('{"#artic-instance-type":"Broken"}');
    }).toThrow();
}
exports.noConstructorFound = noConstructorFound;
