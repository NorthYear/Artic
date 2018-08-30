import { DatabaseEventStore } from "../../src/database.event.store";
import { EventEmitter } from "events";
export function autoCreateEmitter() {
    let store = new DatabaseEventStore();
    expect(store.for("something")).toBeInstanceOf(EventEmitter);
}
