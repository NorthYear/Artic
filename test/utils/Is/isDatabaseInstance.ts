import { Is } from "../../../src/utils/is";
import { DatabaseInstance } from "../../../src/database.instance";
export function isDatabaseInstance() {
    expect(Is.database(new DatabaseInstance("main"))).toBe(true);
    expect(Is.database(this)).toBe(false);
}
