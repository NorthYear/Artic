import { Cryptobox } from "../../../src/utils/cryptobox";
export function decryptData() {
    let encrypted = Cryptobox.encrypt("something", process.env.ENCRYPTION_KEY);
    let str = Cryptobox.decrypt(encrypted, process.env.ENCRYPTION_KEY);
    expect(str).toBe("something");
}
