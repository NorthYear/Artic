"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nilEncryptionKey_1 = require("./nilEncryptionKey");
var failEncryptionKeyNotString_1 = require("./failEncryptionKeyNotString");
var failEncryptionKeyNot32_1 = require("./failEncryptionKeyNot32");
var validEncryptionKey_1 = require("./validEncryptionKey");
function utilsValidationsValidateEncryptionKey() {
    test("it should be able to return false if the encryption key is nil", nilEncryptionKey_1.nilEncryptionKey);
    test("it should throw an error if the encryption key is not a string", failEncryptionKeyNotString_1.failEncryptionKeyNotString);
    test("it should throw an error if the encryption key is a string but not 32 characters in length", failEncryptionKeyNot32_1.failEncryptionKeyNot32);
    test("it should be able to set an encryption key to a valid key", validEncryptionKey_1.validEncryptionKey);
}
exports.utilsValidationsValidateEncryptionKey = utilsValidationsValidateEncryptionKey;
