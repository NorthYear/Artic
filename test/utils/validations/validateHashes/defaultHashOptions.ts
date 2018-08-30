import { Validations } from "../../../../src/utils/validations";
import { DatabaseOptionsInterface } from "../../../../src/interfaces/database.options.interface";
export function defaultHashOptions() {
    let options: DatabaseOptionsInterface = {};
    Validations.validateHashOptions(options, "");
    expect(options.hashKeys).toBe(false);
    expect(options.hashNamespace).toBe(false);
}
