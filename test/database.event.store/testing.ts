import { rootEmitter } from "./rootEmitter";
import { autoCreateEmitter } from "./autoCreateEmitter";
import { cacheEmitter } from "./cacheEmitter";

export function databaseEventStoreTesting() {
    test("it should store a root emitter", rootEmitter);
    test("it should auto create event emitter if not created", autoCreateEmitter)
    test("it should return cached event emiiter if created", cacheEmitter)
}
