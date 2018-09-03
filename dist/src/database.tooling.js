"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("./utils/cryptobox");
var exceptions_1 = require("./utils/exceptions");
var is_1 = require("./utils/is");
var validations_1 = require("./utils/validations");
/**
 * ### @Artic / DatabaseTooling
 *
 * Tooling for the entity to secure
 * information without knowing what
 * securing mechanism
 */
var DatabaseTooling = /** @class */ (function () {
    function DatabaseTooling() {
    }
    return DatabaseTooling;
}());
exports.DatabaseTooling = DatabaseTooling;
/**
 * ### @Artic / DatabaseToolingDecorators
 *
 * Designed to store options state in scope
 * it make it harder to get information out
 * short of memory scraping...
 */
var DatabaseToolingDecorators;
(function (DatabaseToolingDecorators) {
    /**
     * ### @Artic / DatabaseToolingDecorators / HashNamespace
     *
     * Creates a function that holds options scope in memory
     * and does the action of hashing a namespace
     * @param options
     */
    function hashNamespace(options) {
        return function (namespace) {
            if (options.hashNamespace === true) {
                return cryptobox_1.Cryptobox.hash(namespace);
            }
            return namespace;
        };
    }
    DatabaseToolingDecorators.hashNamespace = hashNamespace;
    /**
     * ### @Artic / DatabaseToolingDecorators / HashKey
     *
     * Creates a function that holds options scope in memory
     * and does the action of hashing a key
     * @param options
     */
    function hashKey(options) {
        return function (key) {
            if (options.hashKeys) {
                return cryptobox_1.Cryptobox.hash(key);
            }
            return key;
        };
    }
    DatabaseToolingDecorators.hashKey = hashKey;
    /**
     * ### @Artic / DatabaseToolingDecorators / Serialize
     *
     * Creates a function that holds options scope in memory
     * and does the action of serializing and encrypting data
     * @param options
     */
    function serialize(options, serializer) {
        return function (object) {
            var data = serializer.stringify(object);
            if (is_1.Is.nil(options.encryptionKey)) {
                return data;
            }
            else {
                return cryptobox_1.Cryptobox.encrypt(data, options.encryptionKey);
            }
        };
    }
    DatabaseToolingDecorators.serialize = serialize;
    /**
     * ### @Artic / DatabaseToolingDecorators / Unserialize
     *
     * Creates a function that holds options scope in memory
     * and does the action of unserializing and decrypting data
     * @param options
     */
    function unserialize(options, serializer) {
        return function (data) {
            if (is_1.Is.nil(options.encryptionKey)) {
                return serializer.parse(data);
            }
            else {
                return serializer.parse(cryptobox_1.Cryptobox.decrypt(data, options.encryptionKey));
            }
        };
    }
    DatabaseToolingDecorators.unserialize = unserialize;
    /**
     * ### @Artic / DatabaseToolingDecorators / SetEncryptionKey
     *
     * Creates a function that holds options scope in memory
     * and does the action of setting the encryption key if
     * not previous set.
     * @param options
     */
    function setEncryptionKey(options, databaseName) {
        return function (key) {
            if (is_1.Is.str(options.encryptionKey)) {
                exceptions_1.Exceptions.articError("Can not override encryption key in database (" + databaseName + ")");
            }
            else {
                if (validations_1.Validations.validateEncryptionKey({ encryptionKey: key }, databaseName)) {
                    options.encryptionKey = key;
                }
                else {
                    exceptions_1.Exceptions.articError("The encryption key can not be set to a null value");
                }
            }
        };
    }
    DatabaseToolingDecorators.setEncryptionKey = setEncryptionKey;
})(DatabaseToolingDecorators = exports.DatabaseToolingDecorators || (exports.DatabaseToolingDecorators = {}));
