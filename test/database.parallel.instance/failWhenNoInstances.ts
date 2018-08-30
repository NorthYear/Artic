import { Database } from "../../src";
export function failWhenNoInstances() {
    let para = Database.vParallel();
    expect(() => {
        para.first();
    }).toThrow();
}
