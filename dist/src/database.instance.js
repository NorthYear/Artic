"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_tooling_1 = require("./database.tooling");
var database_event_store_1 = require("./database.event.store");
var DatabaseInstance = /** @class */ (function () {
    function DatabaseInstance(name) {
        this.tooling = new database_tooling_1.DatabaseTooling();
        this.eventStore = new database_event_store_1.DatabaseEventStore();
        this.name = name;
    }
    return DatabaseInstance;
}());
exports.DatabaseInstance = DatabaseInstance;
