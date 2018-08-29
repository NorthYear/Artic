import { utilsValidationsValidateAdapterTesting } from "./validateAdapter/testing";
import { Validations } from "../../../src/utils/validations";

export function utilsValidationsTesting() {
    describe("Validate Adapter", utilsValidationsValidateAdapterTesting);
    test("it should be able to validate options", () => {
        Validations.validateOptions({});
    })
}
