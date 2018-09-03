"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_event_store_1 = require("../../src/database.event.store");
var events_1 = require("events");
function autoCreateEmitter() {
    var store = new database_event_store_1.DatabaseEventStore();
    expect(store.for("something")).toBeInstanceOf(events_1.EventEmitter);
}
exports.autoCreateEmitter = autoCreateEmitter;
