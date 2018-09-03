/**
 * ### @Artic / Utils / Cryptobox
 *
 * Module for hashing, ecrypting and
 * decrypting data.
 */
export declare module Cryptobox {
    /**
     * ### @Artic / Utils / Cryptobox / Hash
     *
     * Hash a string using SHA-256
     * @param str
     */
    function hash(str: string): string;
    /**
     * ### @Artic / Utils / Cryptobox / Encrypt
     *
     * Encrypt text with an ecryption key. Uses an
     * unique and random initialization vector.
     * @param text
     * @param encryptionKey
     */
    function encrypt(text: string, encryptionKey: string): string;
    /**
     * ### @Artic / Utils / Cryptobox / Decrypt
     *
     * Decrypt text with an ecryption key. Requires an
     * unique and random initialization vector.
     * @param text
     * @param encryptionKey
     */
    function decrypt(text: string, encryptionKey: string): string;
}
