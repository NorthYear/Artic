import { Validations } from "../../../../src/utils/validations";
export function notDatabase() {
    expect(() => {
        class User {
        }
        Validations.ensureDatabase(this, User, "testing(<<db-instance>>)");
    }).toThrow();
}
