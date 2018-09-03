"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../../../src/utils/exceptions");
function formatMessages() {
    var output = exceptions_1.Exceptions.view("title", "one", "two", "three");
    expect(output).toBe("| title\n| --------------------------------\n| one\n| two\n| three");
}
exports.formatMessages = formatMessages;
