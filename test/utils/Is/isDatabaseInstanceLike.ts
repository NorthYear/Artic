import { Is } from "../../../src/utils/is";
import { DatabaseInstance } from "../../../src/database.instance";
import { DatabaseParallelInstance } from "../../../src/database.parallel.instance";
export function isDatabaseInstanceLike() {
    let instance = new DatabaseInstance("main");
    let parallel = new DatabaseParallelInstance([new DatabaseInstance("main")]);
    expect(Is.databaseInstanceLike(instance)).toBe(true);
    expect(Is.databaseInstanceLike(parallel)).toBe(true);
    expect(Is.databaseInstanceLike(this)).toBe(false);
}
