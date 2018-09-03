"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashNamespace_1 = require("./hashNamespace");
var notHashNamespace_1 = require("./notHashNamespace");
var hashKey_1 = require("./hashKey");
var notHashKey_1 = require("./notHashKey");
var serialize_1 = require("./serialize");
var serializeEncrypted_1 = require("./serializeEncrypted");
var unserialize_1 = require("./unserialize");
var unserializeEncrypted_1 = require("./unserializeEncrypted");
var setEncryptionKey_1 = require("./setEncryptionKey");
var failWhenEncryptionKeyAlreadySet_1 = require("./failWhenEncryptionKeyAlreadySet");
var failToSetEncryptionKeyNull_1 = require("./failToSetEncryptionKeyNull");
function databaseToolingTesting() {
    test("it should be able to hash namespace", hashNamespace_1.hashNamespace);
    test("it should be able to not hash namespace", notHashNamespace_1.notHashNamespace);
    test("it should be able to hash keys", hashKey_1.hashKey);
    test("it should be able to not hash keys", notHashKey_1.notHashKey);
    test("it should be able to serialize", serialize_1.serialize);
    test("it should be able to serialize encrypted", serializeEncrypted_1.serializeEncrypted);
    test("it should be able to unserialize", unserialize_1.unserialize);
    test("it should be able to unserialize encrypted", unserializeEncrypted_1.unserializeEncrypted);
    test("it should be able to set encryption key", setEncryptionKey_1.setEncryptionKey);
    test("it should fail to set an encryption key when already set", failWhenEncryptionKeyAlreadySet_1.failWhenEncryptionKeyAlreadySet);
    test("it should fail to set an encryption key null", failToSetEncryptionKeyNull_1.failToSetEncryptionKeyNull);
}
exports.databaseToolingTesting = databaseToolingTesting;
