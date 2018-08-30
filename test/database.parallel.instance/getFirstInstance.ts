import { Database } from "../../src";
export function getFirstInstance() {
    let database1 = Database.vMake("main");
    let database2 = Database.vMake("backup");
    let para = Database.vParallel(database1, database2);
    let instance = para.first();
    expect(instance).toBe(database1);
}
