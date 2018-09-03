import { DatabaseEventStore } from './database.event.store';
import { DatabaseTooling } from './database.tooling';
import { AdapterInterface } from './interfaces/adapter.interface';

/**
 * ### @Artic / DatabaseInstance
 * 
 * The representation of a ***DatabaseInstance*** 
 * for Artic.
 * 
 * This describes the complete anatomony of
 * a database instance.
 */
export class DatabaseInstance {

    /**
     * ### @Artic / DatabaseInstance / Name
     * 
     * The name of the database instance. It
     * is a readonly property that should never
     * be changed after creation. 
     * 
     * On persistance, the entity name will be 
     * prefix with this name so that the same 
     * adapter can be used for multiple database
     * instances.
     */
    readonly name: string;

    /**
     * ### @Artic / DatabaseInstance / Adapter
     * 
     * The adapter is the engine that actually
     * handles persistance to anywhere. This contains
     * the instance of ***AdapterInterface*** that
     * you have installed.
     * 
     * However, an adapter interface is not required. In
     * event that an ***AdapterInterface*** is not installed,
     * the built-in ***DevAdapter*** will be substitued.
     */
    public adapter: AdapterInterface;

    /**
     * ### @Artic / DatabaseInstance / Tooling
     * 
     * The tooling, under the hood, to serialize, encrypt 
     * and hash data before persistance.
     */
    public tooling: DatabaseTooling = new DatabaseTooling();

    /**
     * ### @Artic / DatabaseInstance / EventStore
     * 
     * An instance of ***DatabaseEventStore*** to handle 
     * managing events in regards to this particular 
     * ***DatabaseInstance***
     */
    public eventStore: DatabaseEventStore = new DatabaseEventStore();

    /**
     * ### @Artic / DatabaseInstance / Constructor
     * 
     * Creates a new instance of ***DatabaseInstance***
     * @param name 
     */
    public constructor(name: string) { this.name = name }


    /**
     * ### Artic / DatabaseInstance / Empty
     * 
     * Empty an entire database of all records
     * in all namespaces.
     */
    public empty() {
        return this.adapter.empty();
    }
}
