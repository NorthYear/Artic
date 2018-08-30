import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function failWhenEncryptionKeyAlreadySet() {
    expect(() => {
        let options = { encryptionKey: process.env.ENCRYPTION_KEY };
        DatabaseToolingDecorators.setEncryptionKey(options, "")(process.env.ENCRYPTION_KEY);
    }).toThrow();
}
