import { DatabaseInstance } from "./database.instance";
import { DatabaseEventStore } from "./database.event.store";
/**
 * ### @Artic / DatabaseParallelInstance
 *
 * Represents a parallel instance for writing to
 * multiple instances and reading from the first.
 */
export declare class DatabaseParallelInstance {
    private databases;
    /**
     * ### @Artic / DatabaseParallelInstance / EventStore
     *
     * Holds an instance of DatabaseEventStore
     *
     * Primarily for listening to event where the event only
     * fires only.
     */
    eventStore: DatabaseEventStore;
    /**
     * Takes a list of databases
     *
     * The first will be used for reads; all will be used
     * for writes.
     * @constructor
     * @param databases
     */
    constructor(databases: DatabaseInstance[]);
    /**
     * ### @Artic / DatabaseParallelInstance / GetInstances
     *
     * Get all database instances in its contents in
     * an array
     */
    getInstances(): DatabaseInstance[];
    /**
     * ### @Artic / DatabaseParallelInstance / First
     *
     * Get the first database instance from its contents.
     */
    first(): DatabaseInstance;
}
