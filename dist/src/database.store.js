"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_instance_1 = require("./database.instance");
var brander_1 = require("./utils/brander");
var path_1 = require("path");
var DatabaseStore = /** @class */ (function () {
    function DatabaseStore(entity, name) {
        this.entity = entity;
        this.name = name;
    }
    DatabaseStore.prototype.vHas = function (database, key) {
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var namespace = path_1.join(brander_1.Brander.satisfyEntityName(finalDatabase, this.entity), this.name);
        var hashedKey = finalDatabase.tooling.hashKey(key);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.has(namespace, key);
        });
    };
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
