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

    export function validateEncryptionKey(options: DatabaseOptionsInterface, databaseName: string) {
        if (Is.nil(options.encryptionKey)) {
            return false;
        }
        if (Is.str(options.encryptionKey)) {
            if (!Is.strLength(options.encryptionKey, 32)) {
                Exceptions.articError(
                    `[${databaseName}]->[options]->encryptionKey is set to string, but it must be a string 32 character is length.`
                )
            }
        } else {
            Exceptions.articError(
                `[${databaseName}]->[options]->encryptionKey is set, but it must be a string.`,
                `   hint: Instead got typeof ${typeof options.encryptionKey}`
            )
        }
        return true;
    }

    export function validateContext(options: DatabaseOptionsInterface) {
        if (!Is.obj(options.context)) {
            options.context = {}
        }
        options.context["Date"] = Date;
    }

    export function validateHashs(options: DatabaseOptionsInterface, databaseName: string) {
        Is.nil(options.hashKeys) ? options.hashKeys = false : null;
        Is.nil(options.hashNamespace) ? options.hashNamespace = false : null;
        if (!Is.bool(options.hashKeys)) {
            Exceptions.articError(
                `Vallow => Database(${databaseName}) => Options(hashKeys) is set, but it must be a boolean value.`,
                `   hint: Instead got typeof ${Is.type(options.hashKeys)}`
            )
        }
        if (!Is.bool(options.hashNamespace)) {
            Exceptions.articError(
                `[${databaseName}]->[options]->hashNamespace is set, but it must be a boolean value.`,
                `   hint: Instead got typeof ${Is.type(options.hashNamespace)}`
            )
        }
    }

    export function validateOptions(options: DatabaseOptionsInterface, databaseName: string = "") {
        validateAdapter(options);
        validateEncryptionKey(options, databaseName);
        validateContext(options)
        validateHashs(options, databaseName);
    }
}
