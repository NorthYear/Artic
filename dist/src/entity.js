"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./utils/is");
var database_instance_1 = require("./database.instance");
var brander_1 = require("./utils/brander");
var uniqid = require("uniqid");
var exceptions_1 = require("./utils/exceptions");
var validations_1 = require("./utils/validations");
var cryptobox_1 = require("./utils/cryptobox");
var database_store_1 = require("./database.store");
/**
 * ### @Artic / Entity
 *
 * Representation of the an entity
 * in Artic.
 */
var Entity = /** @class */ (function () {
    function Entity() {
    }
    /**
     * ### @Artic / Entity / oMake
     *
     * Creates an new instance of the entity, and if
     * properties are provided, they will populate
     * the instance.
     * @param properties
     */
    Entity.vNew = function (properties) {
        var instance = new this;
        if (is_1.Is.obj(properties)) {
            for (var iterator in properties) {
                instance[iterator] = properties[iterator];
            }
        }
        return instance;
    };
    /**
     * ### @Artic / Entity / vSeed
     *
     * For the number of times provided, creates an
     * instance of the entity and populates an array.
     * The populated array is retured. It does not
     * automatically create records in a database.
     *
     * @param count
     * @param handler
     */
    Entity.vSeed = function (count, handler) {
        var repo = [];
        for (var i = 0; i < count; i++) {
            var instance = new this;
            handler(instance, i);
            repo.push(instance);
        }
        return repo;
    };
    /**
     * ### @Artic / Entity / vEvents
     *
     * Subscribe to events as it pertains to
     * a particular database instance
     * @param database
     */
    Entity.vEvents = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vEvents(<<db-instance>>)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return database.eventStore.for(namespace);
    };
    /**
     * ### @Artic / Entity / vAll
     *
     * Get all records from a database instance
     * under an entities namespace
     *
     * @param this
     * @param database
     */
    Entity.vAll = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vAll(<<db-instance>>);");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.all(namespace).then(function (values) {
                return values.map(function (v) { return finalDatabase.tooling.unserialize(v); });
            });
        });
    };
    Entity.vCount = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vCount(<<db-instance>>)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.count(namespace);
        });
    };
    Entity.vHas = function (database, id) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vHas( ==> db <==, id: string)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        var key = finalDatabase.tooling.hashKey(id);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.has(namespace, key);
        });
    };
    /**
     *
     * @param database
     * @param handler
     */
    Entity.vStream = function (database, handler) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vStream(<<db-instance>>, streamHandler)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.stream(namespace, function (key, value, abort) {
                handler(finalDatabase.tooling.unserialize(value), function () { return abort(); });
            });
        });
    };
    Entity.vCopyAll = function (fromDatabase, toDatabase, progressHandler) {
        validations_1.Validations.ensureDatabase(fromDatabase, this, "vCopyAll(<<db-instance>>, toDatabase)");
        validations_1.Validations.ensureDatabase(toDatabase, this, "vCopyAll(fromDatabase, <<db-instance>>)");
        var fromName = brander_1.Brander.satisfyEntityName(fromDatabase, this);
        var toName = brander_1.Brander.satisfyEntityName(toDatabase, this);
        var fromNamespace = fromDatabase.tooling.hashNamespace(fromName);
        var toNamespace = toDatabase.tooling.hashNamespace(toName);
        return Promise.all([
            fromDatabase.adapter.open(fromNamespace),
            toDatabase.adapter.open(toNamespace)
        ]).then(function () {
            return fromDatabase.adapter.count(fromNamespace).then(function (count) {
                var accountedFor = 0;
                return fromDatabase.adapter.stream(fromNamespace, function (key, value, abort) {
                    var data = fromDatabase.tooling.unserialize(value);
                    var hashedKey = toDatabase.tooling.hashKey(key);
                    var dataString = toDatabase.tooling.serialize(data);
                    toDatabase.adapter.put(toNamespace, hashedKey, dataString).then(function () {
                        accountedFor++;
                        is_1.Is.fn(progressHandler) ? progressHandler((accountedFor / count) * 100) : null;
                    });
                });
            });
        });
    };
    Entity.vEmpty = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vEmpty(<<db-instance>>)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.emptyNamespace(namespace);
    };
    Entity.vClose = function (database) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vClose(<<db-instance>>)");
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(databases.map(function (database) {
            var realName = brander_1.Brander.satisfyEntityName(database, _this);
            var namespace = database.tooling.hashNamespace(realName);
            return database.adapter.close(namespace);
        })).then(function () {
            return;
        });
    };
    Entity.vSaveMany = function (database, instances) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vSaveMany(<<db-instance>>, instances)");
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        instances.forEach(function (instance) {
            if (!is_1.Is.str(instance.id)) {
                instance.id = uniqid();
                instance.created = new Date;
                instance.updated = new Date;
            }
            else {
                instance.updated = new Date;
            }
        });
        return Promise.all(databases.map(function (database) {
            var realName = brander_1.Brander.satisfyEntityName(database, _this);
            var namespace = database.tooling.hashNamespace(realName);
            return database.adapter.open(namespace).then(function () {
                var entries = instances.map(function (instance) {
                    return {
                        key: database.tooling.hashKey(instance.id),
                        value: database.tooling.serialize(instance)
                    };
                });
                return database.adapter.putMany(namespace, entries).then(function () {
                    var emitter = database.eventStore.for(namespace);
                    instances.forEach(function (instance) { return emitter.emit("saved", instance); });
                });
            });
        })).then(function () {
            return instances;
        });
    };
    Entity.vFind = function (database, id) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vFind(<<db-instance>>, id)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        var key = finalDatabase.tooling.hashKey(id);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.get(namespace, key).then(function (value) {
                return finalDatabase.tooling.unserialize(value);
            });
        });
    };
    Entity.vFindMany = function (database, ids) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vFindMany(==> db <==, ids:string[])");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        var keys = ids.map(function (id) { return finalDatabase.tooling.hashKey(id); });
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.getMany(namespace, keys).then(function (values) {
                return values.map(function (value) {
                    return finalDatabase.tooling.unserialize(value);
                });
            });
        });
    };
    Entity.vRemoveMany = function (database, ids) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vRemoveMany(==> db <==, ids:string[])");
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(databases.map(function (database) {
            var realName = brander_1.Brander.satisfyEntityName(database, _this);
            var namespace = database.tooling.hashNamespace(realName);
            var keys = ids.map(function (id) { return database.tooling.hashKey(id); });
            return database.adapter.open(namespace).then(function () {
                return database.adapter.removeMany(namespace, keys).then(function () {
                    database.eventStore.for(namespace).emit("removed", ids);
                });
            });
        })).then(function () { });
    };
    Entity.vStore = function (name) {
        return new database_store_1.DatabaseStore(this, name);
    };
    /**
     * ### @Artic / Entity / vSave
     *
     * Saves the current record to persistance. If
     * the record previously existed, it will overwrite
     * the previous state.
     * @param database
     */
    Entity.prototype.vSave = function (database) {
        var _this = this;
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        if (!is_1.Is.str(this.id)) {
            this.id = uniqid();
            this.created = new Date();
            this.updated = new Date();
        }
        else {
            this.updated = new Date();
        }
        return Promise.all(databases.map(function (database) {
            var realName = brander_1.Brander.satisfyEntityName(database, _this);
            var namespace = database.tooling.hashNamespace(realName);
            var key = database.tooling.hashKey(_this.id);
            var value = database.tooling.serialize(_this);
            return database.adapter.put(namespace, key, value).then(function () {
                database.eventStore.for(namespace).emit("saved", _this);
            });
        })).then(function () {
            return _this;
        });
    };
    Entity.prototype.vRemove = function (database) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vRemove(==> db <==)");
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        if (!is_1.Is.str(this.id)) {
            exceptions_1.Exceptions.articError("Can not remove \"" + brander_1.Brander.getClassName(this) + "\" that does not exist");
        }
        return Promise.all(databases.map(function (database) {
            var realName = brander_1.Brander.satisfyEntityName(database, _this);
            var namespace = database.tooling.hashNamespace(realName);
            var key = database.tooling.hashKey(_this.id);
            return database.adapter.remove(namespace, key).then(function () {
                database.eventStore.for(namespace).emit("removed", _this.id);
            });
        })).then(function () { });
    };
    Entity.prototype.vInject = function () {
        var _this = this;
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        handlers.forEach(function (handler) {
            handler(_this);
        });
        return this;
    };
    Entity.prototype.vJson = function () {
        return JSON.stringify(this);
    };
    Entity.prototype.vMap = function (mapHandler) {
        return mapHandler(this);
    };
    Entity.prototype.vMapJson = function (handler) {
        return JSON.stringify(handler(this));
    };
    Entity.prototype.vEncrypt = function (key) {
        return cryptobox_1.Cryptobox.encrypt(JSON.stringify(this), key);
    };
    Entity.prototype.vConsole = function () {
        console.dir(this, {
            showHidden: false,
            depth: 4,
            colors: true
        });
    };
    Entity.prototype.vMapEncrypt = function (key, handler) {
        return cryptobox_1.Cryptobox.encrypt(JSON.stringify(handler(this)), key);
    };
    return Entity;
}());
exports.Entity = Entity;
