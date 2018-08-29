import { adapterInDevMode } from "./adapterInDevMode";
import { validateAdapter } from "./validateAdapter";
import { adapterNotSet } from "./adapterNotSet";
import { brokenAdapter } from "./brokenAdapter";

export function utilsValidationsValidateAdapterTesting() {
    test("it should not validate an adapter in dev mode", adapterInDevMode);
    test("it should be able to validate an adapter", validateAdapter);
    test("it should ignore an adapter not set", adapterNotSet);
    test("it should not allow an adapter that does not implement the interface", brokenAdapter);
}
