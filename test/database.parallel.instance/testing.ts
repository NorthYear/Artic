import { getAllInstances } from "./getAllInstances";
import { getFirstInstance } from "./getFirstInstance";
import { failWhenNoInstances } from "./failWhenNoInstances";

export function databaseParallelInstanceTesting() {
    test("it should be able to get all instances", getAllInstances);
    test("it should be able to get the first instance", getFirstInstance);
    test("it should fail when no instances exist on first", failWhenNoInstances);
}
