import { DatabaseOptionsInterface } from "./interfaces/database.options.interface";
import { Cryptobox } from "./utils/cryptobox";
import { Is } from "./utils/is";
import { Serializer } from "./utils/serializer";
import { Exceptions } from "./utils/exceptions";
import { Validations } from "./utils/validations";

/**
 * ### @Artic / DatabaseTooling
 * 
 * Tooling for the entity to secure
 * information without knowing what
 * securing mechanism
 */
export class DatabaseTooling {
    /**
     * ### @Artic / DatabaseTooling / Serialize
     * 
     * Serialize data to a string
     */
    public serialize: (data: object) => string

    /**
     * ### @Artic / DatabaseTooling / Unserialize
     * 
     * Unserialize data from string back into context
     */
    public unserialize: <Context>(data: string) => Context

    /**
     * ### @Artic / DatabaseTooling / Set Encryption Key
     * 
     * If the encryption key has not been set, it can be
     * set only once after initial load.
     */
    public setEncryptionKey: (key: string) => void;

    /**
     * ### @Artic / DatabaseTooling / HashNamespace
     * 
     * Hash a namespace with SHA-256 if the options
     * hashNamespace is true
     */
    public hashNamespace: (text: string) => string;

    /**
     * ### @Artic / DatabaseTooling / HashKey
     * 
     * Hash a key with SHA-256 if the options
     * hashKeys is true
     */
    public hashKey: (text: string) => string;
}


/**
 * ### @Artic / DatabaseToolingDecorators
 * 
 * Designed to store options state in scope
 * it make it harder to get information out
 * short of memory scraping...
 */
export namespace DatabaseToolingDecorators {
    
    /**
     * ### @Artic / DatabaseToolingDecorators / HashNamespace
     * 
     * Creates a function that holds options scope in memory
     * and does the action of hashing a namespace
     * @param options 
     */
    export function hashNamespace(options: DatabaseOptionsInterface) {
        return function (namespace: string) {
            if (options.hashNamespace === true) {
                return Cryptobox.hash(namespace)
            }
            return namespace;
        }
    }

    /**
     * ### @Artic / DatabaseToolingDecorators / HashKey
     * 
     * Creates a function that holds options scope in memory
     * and does the action of hashing a key
     * @param options 
     */
    export function hashKey(options: DatabaseOptionsInterface) {
        return function(key: string) {
            if(options.hashKeys) {
                return Cryptobox.hash(key);
            }
            return key;
        }
    }

    /**
     * ### @Artic / DatabaseToolingDecorators / Serialize
     * 
     * Creates a function that holds options scope in memory
     * and does the action of serializing and encrypting data
     * @param options 
     */
    export function serialize(options: DatabaseOptionsInterface, serializer: Serializer) {
        return function (object) {
            let data = serializer.stringify(object)
            if (Is.nil(options.encryptionKey)) {
                return data;
            } else {
                return Cryptobox.encrypt(data, options.encryptionKey);
            }
        }
    }

    /**
     * ### @Artic / DatabaseToolingDecorators / Unserialize
     * 
     * Creates a function that holds options scope in memory
     * and does the action of unserializing and decrypting data
     * @param options 
     */
    export function unserialize(options: DatabaseOptionsInterface, serializer: Serializer) {
        return function <Context>(data: string): Context {
            if (Is.nil(options.encryptionKey)) {
                return serializer.parse(data);
            } else {
                return serializer.parse<Context>(Cryptobox.decrypt(data, options.encryptionKey));
            }
        }
    }


    /**
     * ### @Artic / DatabaseToolingDecorators / SetEncryptionKey
     * 
     * Creates a function that holds options scope in memory
     * and does the action of setting the encryption key if 
     * not previous set.
     * @param options 
     */
    export function setEncryptionKey(options: DatabaseOptionsInterface, databaseName: string) {
        return function (key: string) {
            if(Is.str(options.encryptionKey)) {
                Exceptions.articError(
                    `Can not override encryption key in database (${databaseName})`
                )
            } else {
                if(Validations.validateEncryptionKey({encryptionKey: key}, databaseName)) {
                    options.encryptionKey = key;
                } else {
                    Exceptions.articError(
                        `The encryption key can not be set to a null value`
                    )
                }
            }
        }
    }
}
