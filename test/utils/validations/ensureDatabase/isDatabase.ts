import { Validations } from "../../../../src/utils/validations";
import { DatabaseInstance } from "../../../../src/database.instance";
export function isDatabase() {
    class User {
    }
    Validations.ensureDatabase(new DatabaseInstance("main"), User, "testing(<<db-instance>>)");
}
