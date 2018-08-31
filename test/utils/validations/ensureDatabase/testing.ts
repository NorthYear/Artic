import { notDatabase } from "./notDatabase";
import { isDatabase } from "./isDatabase";

export function utilsValidationsEnsureDatabase() {
    test("it should be able to pass through if a variable is database", isDatabase);
    test("it should fail when variable is not database", notDatabase);
}
