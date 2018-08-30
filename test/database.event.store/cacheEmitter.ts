import { DatabaseEventStore } from "../../src/database.event.store";
export function cacheEmitter() {
    let store = new DatabaseEventStore();
    let events = store.for("cached");
    let events2 = store.for("cached");
    expect(events === events2).toBe(true);
}
