"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_event_store_1 = require("./database.event.store");
var exceptions_1 = require("./utils/exceptions");
/**
 * ### @Artic / DatabaseParallelInstance
 *
 * Represents a parallel instance for writing to
 * multiple instances and reading from the first.
 */
var DatabaseParallelInstance = /** @class */ (function () {
    /**
     * Takes a list of databases
     *
     * The first will be used for reads; all will be used
     * for writes.
     * @constructor
     * @param databases
     */
    function DatabaseParallelInstance(databases) {
        this.databases = databases;
        /**
         * ### @Artic / DatabaseParallelInstance / EventStore
         *
         * Holds an instance of DatabaseEventStore
         *
         * Primarily for listening to event where the event only
         * fires only.
         */
        this.eventStore = new database_event_store_1.DatabaseEventStore();
    }
    /**
     * ### @Artic / DatabaseParallelInstance / GetInstances
     *
     * Get all database instances in its contents in
     * an array
     */
    DatabaseParallelInstance.prototype.getInstances = function () {
        return this.databases;
    };
    /**
     * ### @Artic / DatabaseParallelInstance / First
     *
     * Get the first database instance from its contents.
     */
    DatabaseParallelInstance.prototype.first = function () {
        if (this.databases.length > 0) {
            return this.databases[0];
        }
        exceptions_1.Exceptions.articError("Could not find the first database instance in parallel instance");
    };
    return DatabaseParallelInstance;
}());
exports.DatabaseParallelInstance = DatabaseParallelInstance;
