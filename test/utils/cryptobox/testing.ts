import fs = require("fs");
import { decryptData } from "./decryptData";
import { encryptData } from "./encryptData";
import { hashData } from "./hashData";

export function utilsCryptoboxTesting() {
    test("it should be able to hash data with SHA-256", hashData);
    test("it should be able to encrypt data", encryptData);
    test("is should be able to decrypt data", decryptData);
}
