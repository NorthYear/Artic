"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_event_store_1 = require("../../src/database.event.store");
var events_1 = require("events");
function rootEmitter() {
    var store = new database_event_store_1.DatabaseEventStore();
    expect(store.events).toBeInstanceOf(events_1.EventEmitter);
}
exports.rootEmitter = rootEmitter;
