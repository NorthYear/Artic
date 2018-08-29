import { Cryptobox } from "../../../src/utils/cryptobox";
export function encryptData() {
    let encrypted = Cryptobox.encrypt("something", process.env.ENCRYPTION_KEY);
    expect(encrypted !== "something").toBe(true);
    expect(encrypted.indexOf(":")).toBe(32);
}
