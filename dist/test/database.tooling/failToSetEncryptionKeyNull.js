"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function failToSetEncryptionKeyNull() {
    expect(function () {
        var options = { encryptionKey: null };
        database_tooling_1.DatabaseToolingDecorators.setEncryptionKey(options, "")(null);
    }).toThrow();
}
exports.failToSetEncryptionKeyNull = failToSetEncryptionKeyNull;
