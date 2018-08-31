import { utilsValidationsValidateAdapterTesting } from "./validateAdapter/testing";
import { Validations } from "../../../src/utils/validations";
import { utilsValidationsValidateEncryptionKey } from "./validateEncryptionKey/testing";
import { utilsValidationValidateContext } from "./validateContext/testing";
import { utilsValidationsValidateHashes } from "./validateHashes/testing";
import { utilsValidationsEnsureDatabaseLike } from "./ensureDatabaseLike/testing";
import { utilsValidationsEnsureDatabase } from "./ensureDatabase/testing";

export function utilsValidationsTesting() {
    describe("Validate Adapter", utilsValidationsValidateAdapterTesting);
    describe("Validate Encryption Key", utilsValidationsValidateEncryptionKey);
    describe("Validate Context", utilsValidationValidateContext);
    describe("Validate Hash Options", utilsValidationsValidateHashes);
    describe("Validate Database Like", utilsValidationsEnsureDatabaseLike);
    describe("Validate Database", utilsValidationsEnsureDatabase);
    test("it should be able to validate options", () => {
        Validations.validateOptions({});
        Validations.validateOptions({}, "Name");
    })
}
