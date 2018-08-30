import { Brander } from "../../../src/utils/brander";
import { Database } from "../../../src";
import { join } from "path";
export function getClassNameWithPrefixFromDatabaseName() {
    class User {
    }
    expect(Brander.satisfyEntityName(Database.vMake("bob", {}), User, "after")).toBe(join("bob", "User", "after"));
}
