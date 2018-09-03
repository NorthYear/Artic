import { AdapterInterface } from "./interfaces/adapter.interface";
import { DatabaseTooling } from "./database.tooling";
import { DatabaseEventStore } from "./database.event.store";
export declare class DatabaseInstance {
    readonly name: string;
    adapter: AdapterInterface;
    tooling: DatabaseTooling;
    eventStore: DatabaseEventStore;
    constructor(name: string);
}
