import { Validations } from "../../../../src/utils/validations";
export function notDatabaseLike() {
    expect(() => {
        class User {
        }
        Validations.ensureDatabaseLike(this, User, "testing(<<db-instance>>)");
    }).toThrow();
}
