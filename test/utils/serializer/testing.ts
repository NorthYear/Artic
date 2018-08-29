import { noConstructorFound } from "./noConstructorFound";
import { workWithArrays } from "./workWithArrays";
import { unserialize } from "./unserialize";
import { serialize } from "./serialize";

export function utilsSerializerTesting() {
    test("it should be able to serialize", serialize);
    test("it should be able to unserialize", unserialize)
    test("it should fail when no constructor is found", noConstructorFound)
    test("it should be able to stringify and parse an array", workWithArrays)
}
