"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_instance_1 = require("../database.instance");
var database_parallel_instance_1 = require("../database.parallel.instance");
/**
 * ### @Artic / Utils / Is
 *
 * Artic's assertion concepts are kept
 * here. Lodash would be amazing, but
 * trying to cut down on bloat.
 */
var Is;
(function (Is) {
    /**
     * ### @Artic / Utils / Is / Error
     *
     * Determines if a variable is an error
     * @param v
     */
    function err(v) {
        return v instanceof Error;
    }
    Is.err = err;
    /**
     * ### @Artic / Utils / Is / String
     *
     * Determines if a variable is a string
     * @param v
     */
    function str(v) {
        return typeof v === "string";
    }
    Is.str = str;
    /**
     * ### @Artic / Utils/ Is / Html
     *
     * Determines if a string contains html
     * @param str
     */
    function html(str) {
        return /(<([^>]+)>)/gi.test(str);
    }
    Is.html = html;
    /**
     * ### @Artic / Utils / Is / StringLength
     *
     * Determines if a string is a particular length
     * @param v
     * @param length
     */
    function strLength(v, length) {
        return v.length === length;
    }
    Is.strLength = strLength;
    /**
     * ### @Artic / Utils / Is / Boolean
     *
     * Detemines if a variable is a boolean value
     * @param v
     */
    function bool(v) {
        return typeof v === "boolean";
    }
    Is.bool = bool;
    /**
     * ### @Artic / Utils / Is / Function
     *
     * Determines if a variable is a function
     * @param v
     */
    function fn(v) {
        return typeof v === "function";
    }
    Is.fn = fn;
    /**
     * ### @Artic / Utils / Is / Array
     *
     * Determines if a variable is an array
     * @param v
     */
    function arr(v) {
        return Array.isArray(v);
    }
    Is.arr = arr;
    /**
     * ### @Artic / Utils / Is / Object
     *
     * Determines if a variable is an object
     * -- Arrays do not count
     * @param v
     */
    function obj(v) {
        if (Array.isArray(v)) {
            return false;
        }
        return typeof v === "object" && v !== null;
    }
    Is.obj = obj;
    /**
     * ### @Artic / Utils / Is / Nil
     *
     * Determines if a variable is undefined
     * or null.
     * @param v
     */
    function nil(v) {
        return v === null || v === undefined;
    }
    Is.nil = nil;
    /**
     * ### @Artic / Utils / Is / NotNil
     *
     * Determines if a variable is not null
     * or undefined.
     * @param v
     */
    function notNil(v) {
        return v !== null && v !== undefined;
    }
    Is.notNil = notNil;
    /**
     * ### @Artic / Utils / Is / Type
     *
     * Determines the type of the variable
     * @param v
     */
    function type(v) {
        if (nil(v)) {
            return "nil";
        }
        if (arr(v)) {
            return "array";
        }
        if (v instanceof Error) {
            return "error";
        }
        return typeof v;
    }
    Is.type = type;
    function database(database) {
        return database instanceof database_instance_1.DatabaseInstance;
    }
    Is.database = database;
    function databaseParallelInstance(databaseParallelInstance) {
        return databaseParallelInstance instanceof database_parallel_instance_1.DatabaseParallelInstance;
    }
    Is.databaseParallelInstance = databaseParallelInstance;
    function databaseInstanceLike(database) {
        if (Is.database(database)) {
            return true;
        }
        if (Is.databaseParallelInstance(database)) {
            return true;
        }
        return false;
    }
    Is.databaseInstanceLike = databaseInstanceLike;
})(Is = exports.Is || (exports.Is = {}));
