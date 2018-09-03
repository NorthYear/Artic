import { DatabaseOptionsInterface } from './interfaces/database.options.interface';
import { Serializer } from './utils/serializer';
/**
 * ### @Artic / DatabaseTooling
 *
 * Tooling for the entity to secure
 * information without knowing what
 * securing mechanism
 */
export declare class DatabaseTooling {
    /**
     * ### @Artic / DatabaseTooling / Serialize
     *
     * Serialize data to a string
     */
    serialize: (data: object) => string;
    /**
     * ### @Artic / DatabaseTooling / Unserialize
     *
     * Unserialize data from string back into context
     */
    unserialize: <Context>(data: string) => Context;
    /**
     * ### @Artic / DatabaseTooling / Set Encryption Key
     *
     * If the encryption key has not been set, it can be
     * set only once after initial load.
     */
    setEncryptionKey: (key: string) => void;
    /**
     * ### @Artic / DatabaseTooling / HashNamespace
     *
     * Hash a namespace with SHA-256 if the options
     * hashNamespace is true
     */
    hashNamespace: (text: string) => string;
    /**
     * ### @Artic / DatabaseTooling / HashKey
     *
     * Hash a key with SHA-256 if the options
     * hashKeys is true
     */
    hashKey: (text: string) => string;
}
/**
 * ### @Artic / DatabaseToolingDecorators
 *
 * Designed to store options state in scope
 * it make it harder to get information out
 * short of memory scraping...
 */
export declare namespace DatabaseToolingDecorators {
    /**
     * ### @Artic / DatabaseToolingDecorators / HashNamespace
     *
     * Creates a function that holds options scope in memory
     * and does the action of hashing a namespace
     * @param options
     */
    function hashNamespace(options: DatabaseOptionsInterface): (namespace: string) => string;
    /**
     * ### @Artic / DatabaseToolingDecorators / HashKey
     *
     * Creates a function that holds options scope in memory
     * and does the action of hashing a key
     * @param options
     */
    function hashKey(options: DatabaseOptionsInterface): (key: string) => string;
    /**
     * ### @Artic / DatabaseToolingDecorators / Serialize
     *
     * Creates a function that holds options scope in memory
     * and does the action of serializing and encrypting data
     * @param options
     */
    function serialize(options: DatabaseOptionsInterface, serializer: Serializer): (object: any) => string;
    /**
     * ### @Artic / DatabaseToolingDecorators / Unserialize
     *
     * Creates a function that holds options scope in memory
     * and does the action of unserializing and decrypting data
     * @param options
     */
    function unserialize(options: DatabaseOptionsInterface, serializer: Serializer): <Context>(data: string) => Context;
    /**
     * ### @Artic / DatabaseToolingDecorators / SetEncryptionKey
     *
     * Creates a function that holds options scope in memory
     * and does the action of setting the encryption key if
     * not previous set.
     * @param options
     */
    function setEncryptionKey(options: DatabaseOptionsInterface, databaseName: string): (key: string) => void;
}
