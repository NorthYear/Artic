import { Database } from "../../src";
import { DatabaseInstance } from "../../src/database.instance";
export function createDatabaseInstance() {
    expect(Database.vMake("main")).toBeInstanceOf(DatabaseInstance);
}
