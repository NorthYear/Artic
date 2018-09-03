import { DatabaseInstance } from "../database.instance";
import { DatabaseParallelInstance } from "../database.parallel.instance";
/**
 * ### @Artic / Utils / Is
 *
 * Artic's assertion concepts are kept
 * here. Lodash would be amazing, but
 * trying to cut down on bloat.
 */
export declare namespace Is {
    /**
     * ### @Artic / Utils / Is / Error
     *
     * Determines if a variable is an error
     * @param v
     */
    function err(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / String
     *
     * Determines if a variable is a string
     * @param v
     */
    function str(v: any): boolean;
    /**
     * ### @Artic / Utils/ Is / Html
     *
     * Determines if a string contains html
     * @param str
     */
    function html(str: string): boolean;
    /**
     * ### @Artic / Utils / Is / StringLength
     *
     * Determines if a string is a particular length
     * @param v
     * @param length
     */
    function strLength(v: string, length: number): boolean;
    /**
     * ### @Artic / Utils / Is / Boolean
     *
     * Detemines if a variable is a boolean value
     * @param v
     */
    function bool(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / Function
     *
     * Determines if a variable is a function
     * @param v
     */
    function fn(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / Array
     *
     * Determines if a variable is an array
     * @param v
     */
    function arr(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / Object
     *
     * Determines if a variable is an object
     * -- Arrays do not count
     * @param v
     */
    function obj(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / Nil
     *
     * Determines if a variable is undefined
     * or null.
     * @param v
     */
    function nil(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / NotNil
     *
     * Determines if a variable is not null
     * or undefined.
     * @param v
     */
    function notNil(v: any): boolean;
    /**
     * ### @Artic / Utils / Is / Type
     *
     * Determines the type of the variable
     * @param v
     */
    function type(v: any): "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "error" | "nil" | "array";
    function database(database: DatabaseInstance): boolean;
    function databaseParallelInstance(databaseParallelInstance: DatabaseParallelInstance): boolean;
    function databaseInstanceLike(database: any): boolean;
}
