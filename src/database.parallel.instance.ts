import { DatabaseInstance } from "./database.instance";
import { DatabaseEventStore } from "./database.event.store";
import { Exceptions } from "./utils/exceptions";

/**
 * ### @Artic / DatabaseParallelInstance
 * 
 * Represents a parallel instance for writing to
 * multiple instances and reading from the first.
 */
export class DatabaseParallelInstance {

    /**
     * ### @Artic / DatabaseParallelInstance / EventStore
     * 
     * Holds an instance of DatabaseEventStore
     * 
     * Primarily for listening to event where the event only
     * fires only.
     */
    public eventStore: DatabaseEventStore = new DatabaseEventStore()


    /**
     * Takes a list of databases
     * 
     * The first will be used for reads; all will be used
     * for writes.
     * @constructor
     * @param databases 
     */
    public constructor(private databases: DatabaseInstance[]) { }

    /**
     * ### @Artic / DatabaseParallelInstance / GetInstances
     * 
     * Get all database instances in its contents in
     * an array
     */
    public getInstances() {
        return this.databases;
    }

    /**
     * ### @Artic / DatabaseParallelInstance / First
     * 
     * Get the first database instance from its contents.
     */
    public first() {
        if (this.databases.length > 0) {
            return this.databases[0];
        }
        Exceptions.articError(
            `Could not find the first database instance in parallel instance`
        )
    }

}
