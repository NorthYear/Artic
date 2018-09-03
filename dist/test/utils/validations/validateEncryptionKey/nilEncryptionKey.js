"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function nilEncryptionKey() {
    var undefinedEK = validations_1.Validations.validateEncryptionKey({
        encryptionKey: undefined
    }, "Testing Database");
    expect(undefinedEK).toBe(false);
    var nullEK = validations_1.Validations.validateEncryptionKey({
        encryptionKey: null
    }, "Testing Database");
    expect(nullEK).toBe(false);
}
exports.nilEncryptionKey = nilEncryptionKey;
