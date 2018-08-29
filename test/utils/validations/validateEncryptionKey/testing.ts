import { nilEncryptionKey } from "./nilEncryptionKey";
import { failEncryptionKeyNotString } from "./failEncryptionKeyNotString";
import { failEncryptionKeyNot32 } from "./failEncryptionKeyNot32";
import { validEncryptionKey } from "./validEncryptionKey";

export function utilsValidationsValidateEncryptionKey() {
    test("it should be able to return false if the encryption key is nil", nilEncryptionKey)
    test("it should throw an error if the encryption key is not a string", failEncryptionKeyNotString)
    test("it should throw an error if the encryption key is a string but not 32 characters in length", failEncryptionKeyNot32);
    test("it should be able to set an encryption key to a valid key", validEncryptionKey)
}
