import { Exceptions } from "../utils/exceptions";
import { DatabaseInstance } from "../database.instance";
import path = require("path");


/**
 * ### @Artic / Utils / Brander
 * 
 * Module to capture the names of classes
 * and database instances.
 */
export namespace Brander {

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
    export function getClassName(classDeclaration: Function | Object): string {
        let constructor: Function = null;

        if (typeof classDeclaration === "function") {
            constructor = classDeclaration
            if (typeof constructor["vEntityName"] === "string" && constructor["vEntityName"] !== "") {
                return constructor["vEntityName"];
            }
        } else {
            if (classDeclaration && classDeclaration.constructor && typeof classDeclaration.constructor === "function") {
                constructor = classDeclaration.constructor;
                if (typeof constructor["vEntityName"] === "string" && constructor["vEntityName"] !== "") {
                    return constructor["vEntityName"];
                }
            } else {
                Exceptions.articError(
                    `Tried to parse name from entity and failed`,
                    `   Cannot find name of ${String(classDeclaration)}`
                );
            }
        }
        return constructor
            .toString()
            .split(/\(|\s+/g)
            .filter((token, index) => index === 1)[0]
    }

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
    export function satisfyEntityName(database: DatabaseInstance, entity: Object | Function, ...segments: string[]) {
        return path.join(database.name, getClassName(entity), ...segments);
    }
}
