import { Validations } from "../../../../src/utils/validations";
export function appendDateToContext() {
    let options = {
        context: null
    };
    Validations.validateContext(options);
    expect(options.context["Date"]).toBe(Date);
}
