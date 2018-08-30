import { createDatabaseParallelInstance } from "./createDatabaseParallelInstance";
import { createDatabaseInstance } from "./createDatabaseInstance";

export function databaseTesting() {
    test("it should be able to create a database instance", createDatabaseInstance);
    test("it should be able to create a parallel database instance", createDatabaseParallelInstance);
}
