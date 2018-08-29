import { utilsValidationsValidateAdapterTesting } from "./validateAdapter/testing";
import { Validations } from "../../../src/utils/validations";
import { utilsValidationsValidateEncryptionKey } from "./validateEncryptionKey/testing";
import { utilsValidationValidateContext } from "./validateContext/testing";

export function utilsValidationsTesting() {
    describe("Validate Adapter", utilsValidationsValidateAdapterTesting);
    describe("Validate Encryption Key", utilsValidationsValidateEncryptionKey);
    describe("Validate Context", utilsValidationValidateContext);
    test("it should be able to validate options", () => {
        Validations.validateOptions({});
        Validations.validateOptions({}, "Name");
    })
}
