import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function setEncryptionKey() {
    let options = { encryptionKey: null };
    DatabaseToolingDecorators.setEncryptionKey(options, "")(process.env.ENCRYPTION_KEY);
    expect(options.encryptionKey).toBe(process.env.ENCRYPTION_KEY);
}
