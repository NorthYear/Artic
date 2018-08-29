import { Validations } from "../../../../src/utils/validations";
export function failEncryptionKeyNot32() {
    expect(() => {
        Validations.validateEncryptionKey({
            encryptionKey: "sdflkjsdf"
        }, "");
    }).toThrow();
}
