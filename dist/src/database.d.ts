import { DatabaseInstance } from './database.instance';
import { DatabaseParallelInstance } from './database.parallel.instance';
import { DatabaseOptionsInterface } from './interfaces/database.options.interface';
/**
 * ### @Artic / Database
 *
 * ***Database*** is the main entry point
 * for creating database instances.
 */
export declare namespace Database {
    /**
     * ### @Artic / Database / vMake
     *
     * Creates a new database instance given
     * a name and options
     * @param name
     * @param options
     */
    function vMake(name: string, options?: DatabaseOptionsInterface): DatabaseInstance;
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
    function vParallel(...databases: DatabaseInstance[]): DatabaseParallelInstance;
}
