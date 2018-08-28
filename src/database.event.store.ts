import { EventEmitter } from "events";

export class DatabaseEventStore {
    public events: EventEmitter = new EventEmitter();
    private emitters: { [key: string]: EventEmitter } = {}

    public for(namespace: string) {
        if(this.emitters[namespace] === undefined) {
            this.emitters[namespace] = new EventEmitter();
        }
        return this.emitters[namespace];
    }
}
