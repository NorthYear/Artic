import { Validations } from "../../../../src/utils/validations";
export function validEncryptionKey() {
    let bool = Validations.validateEncryptionKey({
        encryptionKey: process.env.ENCRYPTION_KEY
    }, "");
    expect(bool).toBe(true);
}
