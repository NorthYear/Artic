"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function logRecord(done) {
    var log = jest.spyOn(console, "log").mockImplementationOnce(function () {
        done();
    });
    testing_1.consoleAdapter.logRecord("lskdjf", "lskjdflkj");
    expect(log).toBeCalled();
}
exports.logRecord = logRecord;
