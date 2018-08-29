import { Validations } from "../../../../src/utils/validations";
export function nilEncryptionKey() {
    let undefinedEK = Validations.validateEncryptionKey({
        encryptionKey: undefined
    }, "Testing Database");
    expect(undefinedEK).toBe(false);
    let nullEK = Validations.validateEncryptionKey({
        encryptionKey: null
    }, "Testing Database");
    expect(nullEK).toBe(false);
}
