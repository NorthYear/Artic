import { DatabaseInstance } from "./database.instance";
import { DatabaseOptionsInterface } from "./interfaces/database.options.interface";
import { Validations } from "./utils/validations";
import { DatabaseParallelInstance } from "./database.parallel.instance";
import { DatabaseToolingDecorators } from "./database.tooling";
import { Serializer } from "./utils/serializer";

/**
 * ### @Artic / Database
 * 
 * Main entry point to create
 * database instances.
 */
export namespace Database {

    /**
     * ### @Artic / Database / vMake
     * 
     * Create a database instance
     * @param name 
     * @param options 
     */
    export function vMake(name: string, options?: DatabaseOptionsInterface) {
        options = Object.assign({}, options);
        Validations.validateOptions(options, name);
        let serializer = new Serializer(options.context, name);
        let database = new DatabaseInstance(name);
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
     * Create a parallel database instance
     * combining multiple database instances.
     * @param databases 
     */
    export function vParallel(...databases) {
        return new DatabaseParallelInstance(databases);
    }
}
