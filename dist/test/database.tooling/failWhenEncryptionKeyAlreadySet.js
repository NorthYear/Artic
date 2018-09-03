"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function failWhenEncryptionKeyAlreadySet() {
    expect(function () {
        var options = { encryptionKey: process.env.ENCRYPTION_KEY };
        database_tooling_1.DatabaseToolingDecorators.setEncryptionKey(options, "")(process.env.ENCRYPTION_KEY);
    }).toThrow();
}
exports.failWhenEncryptionKeyAlreadySet = failWhenEncryptionKeyAlreadySet;
