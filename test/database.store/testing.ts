import { vSet } from "./vSet";
import { vSetParallel } from "./vSetParallel";
import { vHas } from "./vHas";
import { vHasParallel } from "./vHasParallel";
import { vGet } from "./vGet";
import { vGetParallel } from "./vGetParallel";
import { vRemove } from "./vRemove";
import { vRemoveParallel } from "./vRemoveParallel";

export function databaseStoreTesting() {
    test("it should be able to determine if a record exists", vHas);
    test("it should be able to determine if a record exist on parallel instance", vHasParallel)
    test("it should be able to set a value", vSet);
    test("it should be able to set a value for parallel instance", vSetParallel)
    test("it should be able to get a record", vGet);
    test("it should be able to get a record from parallel instance", vGetParallel);
    test("it should be able to remove a record", vRemove)
    test("it should be able to remove a record with parallel instance", vRemoveParallel)
}
