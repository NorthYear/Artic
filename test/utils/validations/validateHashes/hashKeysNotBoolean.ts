import { Validations } from "../../../../src/utils/validations";
import { DatabaseOptionsInterface } from "../../../../src/interfaces/database.options.interface";
import { getAString } from "./getAString";
export function hashKeysNotBoolean() {
    let options: DatabaseOptionsInterface = {
        hashKeys: getAString(),
        hashNamespace: true
    };
    expect(() => {
        Validations.validateHashOptions(options, "");
    }).toThrow();
}
