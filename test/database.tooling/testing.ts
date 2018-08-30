import { hashNamespace } from "./hashNamespace";
import { notHashNamespace } from "./notHashNamespace";
import { hashKey } from "./hashKey";
import { notHashKey } from "./notHashKey";
import { serialize } from "./serialize";
import { serializeEncrypted } from "./serializeEncrypted";
import { unserialize } from "./unserialize";
import { unserializeEncrypted } from "./unserializeEncrypted";
import { setEncryptionKey } from "./setEncryptionKey";
import { failWhenEncryptionKeyAlreadySet } from "./failWhenEncryptionKeyAlreadySet";
import { failToSetEncryptionKeyNull } from "./failToSetEncryptionKeyNull";

export function databaseToolingTesting() {
    test("it should be able to hash namespace", hashNamespace);
    test("it should be able to not hash namespace", notHashNamespace);
    test("it should be able to hash keys", hashKey);
    test("it should be able to not hash keys", notHashKey)
    test("it should be able to serialize", serialize);
    test("it should be able to serialize encrypted", serializeEncrypted);
    test("it should be able to unserialize", unserialize);
    test("it should be able to unserialize encrypted", unserializeEncrypted);
    test("it should be able to set encryption key", setEncryptionKey);
    test("it should fail to set an encryption key when already set", failWhenEncryptionKeyAlreadySet);
    test("it should fail to set an encryption key null", failToSetEncryptionKeyNull);
}
