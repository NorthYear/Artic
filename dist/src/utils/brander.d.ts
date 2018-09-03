import { DatabaseInstance } from '../database.instance';
/**
 * ### @Artic / Utils / Brander
 *
 * Module to capture the names of classes
 * and database instances.
 */
export declare namespace Brander {
    /**
     * ### @Artic / Utils / Brander / GetClassName
     *
     * Get the class name of a constructor or instance.
     * It does provide a way to override the name. The
     * name will be overridden when the static property
     * "vEntityName" is something else.
     *
     * @param classDeclaration
     */
    function getClassName(classDeclaration: Function | Object): string;
    /**
     * ### @Artic / Utils / Brander / SatisfyEntityName
     *
     * Because database instances have names as well, Artic
     * will prefix the class name with the database name with
     * the local OS path seperator.
     *
     * @param database
     * @param entity
     * @param segments
     */
    function satisfyEntityName(database: DatabaseInstance, entity: Object | Function, ...segments: string[]): string;
}
