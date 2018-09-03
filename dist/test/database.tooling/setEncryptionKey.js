"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("../../src/database.tooling");
function setEncryptionKey() {
    var options = { encryptionKey: null };
    database_tooling_1.DatabaseToolingDecorators.setEncryptionKey(options, "")(process.env.ENCRYPTION_KEY);
    expect(options.encryptionKey).toBe(process.env.ENCRYPTION_KEY);
}
exports.setEncryptionKey = setEncryptionKey;
