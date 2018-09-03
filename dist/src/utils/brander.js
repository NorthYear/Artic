"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../utils/exceptions");
var path = require("path");
/**
 * ### @Artic / Utils / Brander
 *
 * Module to capture the names of classes
 * and database instances.
 */
var Brander;
(function (Brander) {
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
    function getClassName(classDeclaration) {
        var constructor = null;
        if (typeof classDeclaration === "function") {
            constructor = classDeclaration;
            if (typeof constructor["vEntityName"] === "string" && constructor["vEntityName"] !== "") {
                return constructor["vEntityName"];
            }
        }
        else {
            if (classDeclaration && classDeclaration.constructor && typeof classDeclaration.constructor === "function") {
                constructor = classDeclaration.constructor;
                if (typeof constructor["vEntityName"] === "string" && constructor["vEntityName"] !== "") {
                    return constructor["vEntityName"];
                }
            }
            else {
                exceptions_1.Exceptions.articError("Tried to parse name from entity and failed", "   Cannot find name of " + String(classDeclaration));
            }
        }
        return constructor
            .toString()
            .split(/\(|\s+/g)
            .filter(function (token, index) { return index === 1; })[0];
    }
    Brander.getClassName = getClassName;
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
    function satisfyEntityName(database, entity) {
        var segments = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            segments[_i - 2] = arguments[_i];
        }
        return path.join.apply(path, [database.name, getClassName(entity)].concat(segments));
    }
    Brander.satisfyEntityName = satisfyEntityName;
})(Brander = exports.Brander || (exports.Brander = {}));
