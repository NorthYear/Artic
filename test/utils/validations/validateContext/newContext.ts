import { Validations } from "../../../../src/utils/validations";
export function newContext() {
    let options = {
        context: {}
    };
    Validations.validateContext(options);
    expect(options.context["Date"]).toBe(Date);
}
