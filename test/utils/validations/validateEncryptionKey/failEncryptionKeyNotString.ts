import { Validations } from "../../../../src/utils/validations";
export function failEncryptionKeyNotString() {
    expect(() => {
        Validations.validateEncryptionKey({
            encryptionKey: this
        }, "");
    }).toThrow();
}
