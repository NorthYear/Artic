import { AdapterInterface } from "./interfaces/adapter.interface";
import { DatabaseTooling } from "./database.tooling";
import { DatabaseEventStore } from "./database.event.store";

export class DatabaseInstance {
    readonly name: string;
    public adapter: AdapterInterface;
    public tooling: DatabaseTooling = new DatabaseTooling();
    public eventStore: DatabaseEventStore = new DatabaseEventStore();
    public constructor(name: string) { this.name = name }
}
