"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
/**
 * ### @Artic / Utils / Cryptobox
 *
 * Module for hashing, ecrypting and
 * decrypting data.
 */
var Cryptobox;
(function (Cryptobox) {
    /**
     * ### @Artic / Utils / Cryptobox / Hash
     *
     * Hash a string using SHA-256
     * @param str
     */
    function hash(str) {
        return crypto.createHash('sha256').update(str).digest('hex');
    }
    Cryptobox.hash = hash;
    /**
     * ### @Artic / Utils / Cryptobox / Encrypt
     *
     * Encrypt text with an ecryption key. Uses an
     * unique and random initialization vector.
     * @param text
     * @param encryptionKey
     */
    function encrypt(text, encryptionKey) {
        var iv = crypto.randomBytes(16);
        var cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
        var encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    }
    Cryptobox.encrypt = encrypt;
    /**
     * ### @Artic / Utils / Cryptobox / Decrypt
     *
     * Decrypt text with an ecryption key. Requires an
     * unique and random initialization vector.
     * @param text
     * @param encryptionKey
     */
    function decrypt(text, encryptionKey) {
        var textParts = text.split(':');
        var iv = new Buffer(textParts.shift(), 'hex');
        var encryptedText = new Buffer(textParts.join(':'), 'hex');
        var decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
        var decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
    Cryptobox.decrypt = decrypt;
})(Cryptobox = exports.Cryptobox || (exports.Cryptobox = {}));
