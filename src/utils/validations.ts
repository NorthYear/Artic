import { DatabaseOptionsInterface } from "../interfaces/database.options.interface";
import { Is } from "./is";
import { Exceptions } from "./exceptions";

export namespace Validations {

    export function validateAdapter(options: DatabaseOptionsInterface) {
        if (options.devMode === true) {
            Exceptions.articWarning(
                `You are using the current adapter in dev mode`,
                `   - The adapter was not not checked for validity`
            )
            return;
        }
        if (Is.nil(options.adapter)) { return; }
        let missingMethods: string[] = [];
        !Is.fn(options.adapter.all) ? missingMethods.push("all") : null;
        !Is.fn(options.adapter.empty) ? missingMethods.push("empty") : null;
        !Is.fn(options.adapter.emptyNamespace) ? missingMethods.push("emptyNamepace") : null;
        !Is.fn(options.adapter.get) ? missingMethods.push("get") : null;
        !Is.fn(options.adapter.getMany) ? missingMethods.push("getMany") : null;
        !Is.fn(options.adapter.put) ? missingMethods.push("put") : null;
        !Is.fn(options.adapter.putMany) ? missingMethods.push("putMany") : null;
        !Is.fn(options.adapter.remove) ? missingMethods.push("remove") : null;
        !Is.fn(options.adapter.removeMany) ? missingMethods.push("removeMany") : null;
        !Is.fn(options.adapter.stream) ? missingMethods.push("stream") : null;
        if (missingMethods.length > 0) {
            options.adapter = undefined;
            Exceptions.articWarning(
                `The current installed adapter does not match the specification for an adapter.`,
                `   It will be replaced with the built-in "Console Adapter" for the time being.`,
                `   The adapter is missing methods: ${missingMethods.join(" | ")}`
            )
        }
    }

    export function validateOptions(options: DatabaseOptionsInterface) {
        validateAdapter(options);
    }
}
