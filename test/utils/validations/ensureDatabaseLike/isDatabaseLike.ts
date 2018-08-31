import { Validations } from "../../../../src/utils/validations";
import { DatabaseInstance } from "../../../../src/database.instance";
export function isDatabaseLike() {
    class User {
    }
    Validations.ensureDatabaseLike(new DatabaseInstance("main"), User, "testing(<<db-instance>>)");
}
