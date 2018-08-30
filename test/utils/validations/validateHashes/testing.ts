import { defaultHashOptions } from "./defaultHashOptions";
import { hashKeysNotBoolean } from "./hashKeysNotBoolean";
import { hashNamespaceNotBoolean } from "./hashNamespaceNotBoolean";

export function utilsValidationsValidateHashes() {
    test("it should be able to set default hash options if none are provided", defaultHashOptions)
    test("it should fail when hashKeys is not a boolean value", hashKeysNotBoolean)
    test("it should fail when hashNamespaces is not a boolean value", hashNamespaceNotBoolean)
}
