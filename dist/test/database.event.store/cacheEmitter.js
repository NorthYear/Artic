"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_event_store_1 = require("../../src/database.event.store");
function cacheEmitter() {
    var store = new database_event_store_1.DatabaseEventStore();
    var events = store.for("cached");
    var events2 = store.for("cached");
    expect(events === events2).toBe(true);
}
exports.cacheEmitter = cacheEmitter;
