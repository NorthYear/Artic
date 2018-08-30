import { DatabaseEventStore } from "../../src/database.event.store";
import { EventEmitter } from "events";
export function rootEmitter() {
    let store = new DatabaseEventStore();
    expect(store.events).toBeInstanceOf(EventEmitter);
}
