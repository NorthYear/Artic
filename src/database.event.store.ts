import { EventEmitter } from "events";

/**
 * ### @Artic / Database / DatabaseEventStore
 * 
 * Keeps up with event emitters for a particular 
 * namespace in a database instance.
 */
export class DatabaseEventStore {
    /**
     * ### @Artic / Database / DatabaseEventStore / Events
     * 
     * Database wide events
     */
    public events: EventEmitter = new EventEmitter();

    /**
     * ### @Artic / Database / DatabaseEventStore / Emitter
     * 
     * Individual namespace emitters for a database instance
     */
    private emitters: { [key: string]: EventEmitter } = {}

    /**
     * ### @Artic / Database / DatabaseEventStore / For
     * 
     * Retrieve EventEmitter for an individual namespace
     * @param namespace 
     */
    public for(namespace: string) {
        if(this.emitters[namespace] === undefined) {
            this.emitters[namespace] = new EventEmitter();
        }
        return this.emitters[namespace];
    }
}
