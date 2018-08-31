import { Is } from "../../../src/utils/is";
import { DatabaseInstance } from "../../../src/database.instance";
import { DatabaseParallelInstance } from "../../../src/database.parallel.instance";
export function isParallelDatabaseInstance() {
    expect(Is.databaseParallelInstance(new DatabaseParallelInstance([new DatabaseInstance("main")]))).toBe(true);
    expect(Is.databaseParallelInstance(this)).toBe(false);
}
