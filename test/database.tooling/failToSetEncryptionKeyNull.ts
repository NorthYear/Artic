import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function failToSetEncryptionKeyNull() {
    expect(() => {
        let options = { encryptionKey: null };
        DatabaseToolingDecorators.setEncryptionKey(options, "")(null);
    }).toThrow();
}
