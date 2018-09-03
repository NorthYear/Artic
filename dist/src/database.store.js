"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var database_instance_1 = require("./database.instance");
var brander_1 = require("./utils/brander");
/**
 * ### @Artic / DatabaseStore
 *
 * Represents a key-value store that
 * is appended to an ***Entity***
 */
var DatabaseStore = /** @class */ (function () {
    /**
     * ### @Artic / DatabaseStore / Constructor
     *
     * Create an instance of ***DatabaseStore*** with
     * a given ***Entity*** and name.
     * @param entity
     * @param name
     */
    function DatabaseStore(entity, name) {
        this.entity = entity;
        this.name = name;
    }
    /**
    * ### @Artic / DatabaseStore / vHas
    *
    * When given a ***DatabaseInstance*** or a
    * ***DatabaseParallelInstance***, it will determine
    * if a record exists with a certain key under the
    * current ***Entity***'s store.
    *
    * @param database
    * @param id
    */
    DatabaseStore.prototype.vHas = function (database, key) {
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var namespace = path_1.join(brander_1.Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        var hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.has(namespace, key);
        });
    };
    /**
     * ### @Artic / DatabaseStore / vSet
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, persists
     * a key and value under the current
     * ***Entity***'s store.
     *
     * @param database
     * @param instances
     */
    DatabaseStore.prototype.vSet = function (database, key, value) {
        var _this = this;
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(databases.map(function (database) {
            var name = path_1.join(brander_1.Brander.satisfyEntityName(database, _this.entity), _this.name);
            var namespace = database.tooling.hashNamespace(name);
            var hashedKey = database.tooling.hashKey(key);
            return database.adapter.open(namespace).then(function () {
                return database.adapter.put(namespace, hashedKey, database.tooling.serialize(value)).then(function () {
                    database.eventStore.for(namespace).emit("saved", value);
                });
            });
        })).then(function () { });
    };
    /**
     * ### @Artic / DatabaseStore / vGet
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, gets a
     * particular record by key under the current
     * ***Entity***'s store.
     *
     * @param database
     * @param id
     */
    DatabaseStore.prototype.vGet = function (database, key) {
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var namespace = path_1.join(brander_1.Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        var hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.get(namespace, key).then(function (value) {
                return finalDatabase.tooling.unserialize(value);
            });
        });
    };
    /**
    * ### @Artic / Entity / vRemove
    *
    * When given a ***DatabaseInstance*** or a
    * ***DatabaseParallelInstance***, removes
    * the record from the current ***Entity***'s
    * store.
    *
    * @param database
    * @param key
    */
    DatabaseStore.prototype.vRemove = function (database, key) {
        var _this = this;
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(databases.map(function (database) {
            var name = path_1.join(brander_1.Brander.satisfyEntityName(database, _this.entity), _this.name);
            var namespace = database.tooling.hashNamespace(name);
            var hashedKey = database.tooling.hashKey(key);
            return database.adapter.open(namespace).then(function () {
                return database.adapter.remove(namespace, hashedKey).then(function () {
                    database.eventStore.for(namespace).emit("removed", key);
                });
            });
        })).then(function () { });
    };
    return DatabaseStore;
}());
exports.DatabaseStore = DatabaseStore;
