import { Validations } from "../../../../src/utils/validations";
import { DatabaseOptionsInterface } from "../../../../src/interfaces/database.options.interface";
import { getAString } from "./getAString";
export function hashNamespaceNotBoolean() {
    let options: DatabaseOptionsInterface = {
        hashKeys: false,
        hashNamespace: getAString()
    };
    expect(() => {
        Validations.validateHashOptions(options, "");
    }).toThrow();
}
