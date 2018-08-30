import { Database } from "../../src";
import { DatabaseParallelInstance } from "../../src/database.parallel.instance";
export function createDatabaseParallelInstance() {
    expect(Database.vParallel(Database.vMake("main"))).toBeInstanceOf(DatabaseParallelInstance);
}
