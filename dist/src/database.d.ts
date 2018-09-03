import { DatabaseInstance } from "./database.instance";
import { DatabaseOptionsInterface } from "./interfaces/database.options.interface";
import { DatabaseParallelInstance } from "./database.parallel.instance";
/**
 * ### @Artic / Database
 *
 * Main entry point to create
 * database instances.
 */
export declare namespace Database {
    /**
     * ### @Artic / Database / vMake
     *
     * Create a database instance
     * @param name
     * @param options
     */
    function vMake(name: string, options?: DatabaseOptionsInterface): DatabaseInstance;
    /**
     * ### @Artic / Database / vParallel
     *
     * Create a parallel database instance
     * combining multiple database instances.
     * @param databases
     */
    function vParallel(...databases: any[]): DatabaseParallelInstance;
}
