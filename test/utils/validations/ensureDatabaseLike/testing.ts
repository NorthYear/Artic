import { isDatabaseLike } from "./isDatabaseLike";
import { notDatabaseLike } from "./notDatabaseLike";

export function utilsValidationsEnsureDatabaseLike() {
    test("it should be able to pass through if a variable is database like", isDatabaseLike);
    test("it should fail when variable is not database like", notDatabaseLike);
}
