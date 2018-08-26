/**
 * ### @Artic / Utils / Is
 * 
 * Artic's assertion concepts are kept
 * here. Lodash would be amazing, but 
 * trying to cut down on bloat.
 */
export namespace Is {

    /**
     * ### @Artic / Utils / Is / Error
     * 
     * Determines if a variable is an error
     * @param v 
     */
    export function err(v: any) {
        return v instanceof Error;
    }

    /**
     * ### @Artic / Utils / Is / String
     * 
     * Determines if a variable is a string
     * @param v 
     */
    export function str(v: any) {
        return typeof v === "string";
    }


    /**
     * ### @Artic / Utils / Is / StringLength
     * 
     * Determines if a string is a particular length
     * @param v 
     * @param length 
     */
    export function strLength(v: string, length: number) {
        return v.length === length;
    }


    /**
     * ### @Artic / Utils / Is / Boolean
     * 
     * Detemines if a variable is a boolean value
     * @param v 
     */
    export function bool(v) {
        return typeof v === "boolean";
    }


    /**
     * ### @Artic / Utils / Is / Function
     * 
     * Determines if a variable is a function
     * @param v 
     */
    export function fn(v) {
        return typeof v === "function";
    }


    /**
     * ### @Artic / Utils / Is / Array
     * 
     * Determines if a variable is an array
     * @param v 
     */
    export function arr(v) {
        return Array.isArray(v);
    }


    /**
     * ### @Artic / Utils / Is / Object
     * 
     * Determines if a variable is an object
     * -- Arrays do not count
     * @param v 
     */
    export function obj(v: any) {
        if (Array.isArray(v)) { return false }
        return typeof v === "object" && v !== null;
    }


    /**
     * ### @Artic / Utils / Is / Nil
     * 
     * Determines if a variable is undefined
     * or null.
     * @param v 
     */
    export function nil(v) {
        return v === null || v === undefined;
    }


    /**
     * ### @Artic / Utils / Is / NotNil
     * 
     * Determines if a variable is not null
     * or undefined.
     * @param v 
     */
    export function notNil(v) {
        return v !== null && v !== undefined;
    }


    /**
     * ### @Artic / Utils / Is / Type
     * 
     * Determines the type of the variable
     * @param v 
     */
    export function type(v) {
        if (nil(v)) { return "nil" }
        if (arr(v)) { return "array" }
        if (v instanceof Error) { return "error" }
        return typeof v;
    }


    export function strippingHtml(str: string) { }
}
