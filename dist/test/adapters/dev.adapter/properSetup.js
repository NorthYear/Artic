"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("./testing");
function properSetup() {
    expect(typeof testing_1.adapter.store).toBe("object");
    expect(testing_1.adapter.store !== null).toBe(true);
    expect(testing_1.consoleAdapter.quiet).toBe(false);
    expect(testing_1.adapter.quiet).toBe(true);
}
exports.properSetup = properSetup;
