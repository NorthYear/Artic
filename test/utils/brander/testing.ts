import { getClassNameFromConstructor } from "./getClassNameFromConstructor";
import { getClassNameFromInstance } from "./getClassNameFromInstance";
import { getClassNameFromOverrideInConstructor } from "./getClassNameFromOverrideInConstructor";
import { getClassNameFromOverrideInstance } from "./getClassNameFromOverrideInstance";
import { getClassNameWithPrefixFromDatabaseName } from "./getClassNameWithPrefixFromDatabaseName";
import { failWithoutAName } from "./failWithoutAName";

export function utilsBranderTesting() {
    test("it should be able to get the class name from a constructor", getClassNameFromConstructor);
    test("it should be able to get the class name from an instance", getClassNameFromInstance);
    test("it should be able to get the class name from the override in a constructor situation", getClassNameFromOverrideInConstructor);
    test("it should be able to get the class name from the override in an instance situation", getClassNameFromOverrideInstance);
    test("it should be able get the entity name with database prefix", getClassNameWithPrefixFromDatabaseName)
    test("it should fail when when presented with a primitive type with out a name", failWithoutAName)
}
