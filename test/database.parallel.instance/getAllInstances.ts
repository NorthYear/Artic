import { Database } from "../../src";
export function getAllInstances() {
    let database1 = Database.vMake("main");
    let database2 = Database.vMake("backup");
    let para = Database.vParallel(database1, database2);
    let instances = para.getInstances();
    expect(instances.length).toBe(2);
    expect(instances[0]).toBe(database1);
    expect(instances[1]).toBe(database2);
}
