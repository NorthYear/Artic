import crypto = require('crypto');


/**
 * ### @Artic / Utils / Cryptobox
 * 
 * Module for hashing, ecrypting and 
 * decrypting data.
 */
export module Cryptobox {
    
    /**
     * ### @Artic / Utils / Cryptobox / Hash
     * 
     * Hash a string using SHA-256
     * @param str 
     */
    export function hash(str: string) {
        return crypto.createHash('sha256').update(str).digest('hex');
    }

    /**
     * ### @Artic / Utils / Cryptobox / Encrypt
     * 
     * Encrypt text with an ecryption key. Uses an 
     * unique and random initialization vector.
     * @param text 
     * @param encryptionKey 
     */
    export function encrypt(text: string, encryptionKey: string) {
        let iv = crypto.randomBytes(16);
        let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    }

    /**
     * ### @Artic / Utils / Cryptobox / Decrypt
     * 
     * Decrypt text with an ecryption key. Requires an 
     * unique and random initialization vector.
     * @param text 
     * @param encryptionKey 
     */
    export function decrypt(text: string, encryptionKey: string) {
        let textParts = text.split(':');
        let iv = new Buffer(textParts.shift(), 'hex');
        let encryptedText = new Buffer(textParts.join(':'), 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}
