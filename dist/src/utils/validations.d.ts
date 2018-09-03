import { DatabaseOptionsInterface } from "../interfaces/database.options.interface";
import { DatabaseInstance } from "../database.instance";
import { DatabaseParallelInstance } from "../database.parallel.instance";
export declare namespace Validations {
    function ensureDatabaseLike(database: DatabaseInstance | DatabaseParallelInstance, entity: object | Function, method: string): void;
    function ensureDatabase(database: DatabaseInstance, entity: object | Function, method: string): void;
    function validateAdapter(options: DatabaseOptionsInterface): void;
    function validateEncryptionKey(options: DatabaseOptionsInterface, databaseName: string): boolean;
    function validateContext(options: DatabaseOptionsInterface): void;
    function validateHashOptions(options: DatabaseOptionsInterface, databaseName: string): void;
    function validateOptions(options: DatabaseOptionsInterface, databaseName?: string): void;
}
