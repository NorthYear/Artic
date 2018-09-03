"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_event_store_1 = require("./database.event.store");
var database_tooling_1 = require("./database.tooling");
/**
 * ### @Artic / DatabaseInstance
 *
 * The representation of a ***DatabaseInstance***
 * for Artic.
 *
 * This describes the complete anatomony of
 * a database instance.
 */
var DatabaseInstance = /** @class */ (function () {
    /**
     * ### @Artic / DatabaseInstance / Constructor
     *
     * Creates a new instance of ***DatabaseInstance***
     * @param name
     */
    function DatabaseInstance(name) {
        /**
         * ### @Artic / DatabaseInstance / Tooling
         *
         * The tooling, under the hood, to serialize, encrypt
         * and hash data before persistance.
         */
        this.tooling = new database_tooling_1.DatabaseTooling();
        /**
         * ### @Artic / DatabaseInstance / EventStore
         *
         * An instance of ***DatabaseEventStore*** to handle
         * managing events in regards to this particular
         * ***DatabaseInstance***
         */
        this.eventStore = new database_event_store_1.DatabaseEventStore();
        this.name = name;
    }
    /**
     * ### Artic / DatabaseInstance / Empty
     *
     * Empty an entire database of all records
     * in all namespaces.
     */
    DatabaseInstance.prototype.empty = function () {
        return this.adapter.empty();
    };
    return DatabaseInstance;
}());
exports.DatabaseInstance = DatabaseInstance;
