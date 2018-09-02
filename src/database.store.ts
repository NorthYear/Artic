import { DatabaseInstance } from "./database.instance";
import { DatabaseParallelInstance } from "./database.parallel.instance";
import { Brander } from "./utils/brander";
import { join } from "path";

export class DatabaseStore {

    public constructor(private entity: typeof Object | Function, private name: string) {}

    public vHas(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string
    ) {
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let namespace = join(Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        let hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.has(namespace, key)
        })
    }

    public vSet(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string, 
        value: any
    ) {
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(
            databases.map(database => {
                let name = join(Brander.satisfyEntityName(database, this.entity), this.name);
                let namespace = database.tooling.hashNamespace(name);
                let hashedKey = database.tooling.hashKey(key);
                return database.adapter.open(namespace).then(() => {
                    return database.adapter.put(namespace, hashedKey, database.tooling.serialize(value)).then(() => {
                        database.eventStore.for(namespace).emit("saved", value);
                    })
                })
            })
        ).then(() => {})
    }

    public vGet<Context>(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string
    ) {
        let finalDatabase = database instanceof DatabaseInstance ? database : database.first();
        let namespace = join(Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        let hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(() => {
            return finalDatabase.adapter.get(namespace, key).then(value => {
                return finalDatabase.tooling.unserialize<Context>(value)
            })
        })
    }

    public vRemove<Context>(
        database: DatabaseInstance | DatabaseParallelInstance, 
        key: string
    ) {
        let databases = database instanceof DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(
            databases.map(database => {
                let name = join(Brander.satisfyEntityName(database, this.entity), this.name);
                let namespace = database.tooling.hashNamespace(name);
                let hashedKey = database.tooling.hashKey(key);
                return database.adapter.open(namespace).then(() => {
                    return database.adapter.remove(namespace, hashedKey).then(() => {
                        database.eventStore.for(namespace).emit("removed", key);
                    })
                })
            })
        ).then(() => {})
    }
}
