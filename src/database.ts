import { DatabaseInstance } from "./database.instance";
import { DatabaseOptionsInterface } from "./interfaces/database.options.interface";
import { Validations } from "./utils/validations";
import { DatabaseParallelInstance } from "./database.parallel.instance";
import { DatabaseToolingDecorators } from "./database.tooling";
import { Serializer } from "./utils/serializer";
import { DevAdapter } from "./adapters/dev.adapter";
import { Is } from "./utils/is";

/**
 * ### @Artic / Database
 * 
 * ***Database*** is the main entry point
 * for creating database instances.
 */
export namespace Database {

    /**
     * ### @Artic / Database / vMake
     * 
     * Creates a new database instance given
     * a name and options 
     * @param name 
     * @param options 
     */
    export function vMake(name: string, options?: DatabaseOptionsInterface) {
        options = Object.assign({}, options);
        Validations.validateOptions(options, name);
        let serializer = new Serializer(options.context, name);
        let database = new DatabaseInstance(name);
        database.adapter = Is.nil(options.adapter) ? new DevAdapter() : options.adapter;
        database.tooling.hashNamespace = DatabaseToolingDecorators.hashNamespace(options);
        database.tooling.hashKey = DatabaseToolingDecorators.hashKey(options);
        database.tooling.serialize = DatabaseToolingDecorators.serialize(options, serializer);
        database.tooling.unserialize = DatabaseToolingDecorators.unserialize(options, serializer);
        database.tooling.setEncryptionKey = DatabaseToolingDecorators.setEncryptionKey(options, name);
        return database;
    }

    /**
     * ### @Artic / Database / vParallel
     * 
     * Creates a ***DatabaseParallelInstance*** combining
     * more than one database instance to persist to
     * more than one location at the same time. All
     * writes will persist to every combined instance
     * while all reads will be read from only the first
     * instance provided.
     * 
     * @param databases 
     */
    export function vParallel(...databases) {
        return new DatabaseParallelInstance(databases);
    }
}
