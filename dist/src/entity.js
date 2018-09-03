"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_instance_1 = require("./database.instance");
var database_store_1 = require("./database.store");
var brander_1 = require("./utils/brander");
var cryptobox_1 = require("./utils/cryptobox");
var exceptions_1 = require("./utils/exceptions");
var is_1 = require("./utils/is");
var validations_1 = require("./utils/validations");
var uniqid = require("uniqid");
/**
 * ### @Artic / Entity
 *
 * Represents an ***Entity*** in Artic.
 *
 * Entity is a definition of an concept that
 * contains properties that are persisted and
 * methods, that are extendable, to build out the
 * model of an application.
 */
var Entity = /** @class */ (function () {
    function Entity() {
    }
    /**
     * ### @Artic / Entity / vNew
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
     * Returns the ***EventEmitter*** for the
     * current ***Entity*** that corresponds directly
     * to a database instance you provide.
     *
     * If a ***DatabaseParallelInstance*** is provided,
     * the first ***DatabaseInstance***'s ***EventEmitter***
     * will be returned.
     *
     * @param database
     */
    Entity.vEvents = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vEvents( ==> db <== )");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return database.eventStore.for(namespace);
    };
    /**
     * ### @Artic / Entity / vAll
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will return
     * a list of all records in the context of the
     * current ***Entity***
     *
     * @param database
     */
    Entity.vAll = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vAll( ==> db <== )");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.all(namespace).then(function (values) {
                return values.map(function (v) { return finalDatabase.tooling.unserialize(v); });
            });
        });
    };
    /**
     * ### @Artic / Entity / vCount
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will count
     * the number of records that reside under the current
     * ***Entity***'s namespace.
     *
     * @param database
     */
    Entity.vCount = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vCount( ==> db <== )");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.count(namespace);
        });
    };
    /**
     * ### @Artic / Entity / vHas
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will determine
     * if a record exists with a certain id under the
     * current ***Entity***'s namespace.
     *
     * @param database
     * @param id
     */
    Entity.vHas = function (database, id) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vHas( ==> db <== , id: string)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        var key = finalDatabase.tooling.hashKey(id);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.has(namespace, key);
        });
    };
    /**
     * ### @Artic / Entity / vStream
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, it will stream
     * all records under the current ***Entity***'s
     * namespace in the current ***Entity***'s context
     * through a handler that you provide.
     *
     * In the handler, there will two arguments provided. The
     * first will be the record in context. The second is an abort
     * function that maybe called at anytime to cease the
     * stream. When the stream is aborted or the stream has
     * completed, the returned promise will resolve.
     *
     * @param database
     * @param handler
     */
    Entity.vStream = function (database, handler) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vStream( ==> db-instance <==, streamHandler)");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.open(namespace).then(function () {
            return finalDatabase.adapter.stream(namespace, function (key, value, abort) {
                handler(finalDatabase.tooling.unserialize(value), function () { return abort(); });
            });
        });
    };
    /**
     * ### @Artic / Entity / vCopyAll
     *
     * Copies an entire ***Entity***'s
     * namespace from one ***DatabaseInstance***
     * to another.
     *
     * If you wish to monitor the progress during the
     * copying, a progress handler maybe supplied that
     * will be periodically called, suppling you with an
     * ***Integer*** representing the percentage complete.
     *
     * @param fromDatabase
     * @param toDatabase
     * @param progressHandler
     */
    Entity.vCopyAll = function (fromDatabase, toDatabase, progressHandler) {
        validations_1.Validations.ensureDatabase(fromDatabase, this, "vCopyAll( ==> db <== , toDatabase)");
        validations_1.Validations.ensureDatabase(toDatabase, this, "vCopyAll(fromDatabase, ==> db <==)");
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
    /**
     * ### @Artic / Entity / vEmpty
     *
     * Empties all records under an ***Entity***'s
     * namespace in an particular ***DatabaseInstance***
     * or ***DatabaseParallelInstance***
     *
     * @param database
     */
    Entity.vEmpty = function (database) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vEmpty( ==> db <== )");
        var finalDatabase = database instanceof database_instance_1.DatabaseInstance ? database : database.first();
        var realName = brander_1.Brander.satisfyEntityName(finalDatabase, this);
        var namespace = finalDatabase.tooling.hashNamespace(realName);
        return finalDatabase.adapter.emptyNamespace(namespace);
    };
    /**
     * ### @Artic / Entity / vClose
     *
     * Closes a ***DatabaseInstance***'s or a
     * ***DatabaseParallelInstance***'s adapter connection to
     * the current ***Entity***'s namespace.
     *
     * @param database
     */
    Entity.vClose = function (database) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vClose( ==> db <== )");
        var databases = database instanceof database_instance_1.DatabaseInstance ? [database] : database.getInstances();
        return Promise.all(databases.map(function (database) {
            var realName = brander_1.Brander.satisfyEntityName(database, _this);
            var namespace = database.tooling.hashNamespace(realName);
            return database.adapter.close(namespace);
        })).then(function () {
            return;
        });
    };
    /**
     * ### @Artic / Entity / vSaveMany
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, persists
     * a list of instances of the current
     * ***Entity***.
     *
     * @param database
     * @param instances
     */
    Entity.vSaveMany = function (database, instances) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vSaveMany( ==> db <== , instances)");
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
    /**
     * ### @Artic / Entity / vFind
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, finds a
     * particular record by id under the current
     * ***Entity***'s namespace.
     *
     * @param database
     * @param id
     */
    Entity.vFind = function (database, id) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vFind( ==> db <== , id)");
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
    /**
     * ### @Artic / Entity / vFindMany
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, finds many
     * records by a list of ids under a current
     * ***Entity***'s namespace.
     *
     * @param database
     * @param ids
     */
    Entity.vFindMany = function (database, ids) {
        validations_1.Validations.ensureDatabaseLike(database, this, "vFindMany( ==> db <== , ids:string[])");
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
    /**
     * ### @Artic / Entity / vRemoveMany
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, removes many
     * records by a list ids under the current
     * ***Entity***'s namespace.
     *
     * @param database
     * @param ids
     */
    Entity.vRemoveMany = function (database, ids) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vRemoveMany( ==> db <== , ids:string[])");
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
    /**
     * ### @Artic / Entity / vStore
     *
     * Creates an instance of ***DatabaseStore***
     * and returns it futher persistance.
     *
     * Creates a seperate key-value store; great
     * for creating indexes or stashing extra data
     * that does not necessary fit in a normal
     * entity's scenario.
     *
     * @param name
     */
    Entity.vStore = function (name) {
        return new database_store_1.DatabaseStore(this, name);
    };
    /**
     * ### @Artic / Entity / vSave
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, saves the current
     * record to persistance. If the record previously
     * existed, it will overwrite the previous record.
     *
     * @param database
     */
    Entity.prototype.vSave = function (database) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vSave( ==> db <== )");
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
    /**
     * ### @Artic / Entity / vRemove
     *
     * When given a ***DatabaseInstance*** or a
     * ***DatabaseParallelInstance***, removes
     * the record from the current ***Entity***'s
     * namespace.
     *
     * @param database
     */
    Entity.prototype.vRemove = function (database) {
        var _this = this;
        validations_1.Validations.ensureDatabaseLike(database, this, "vRemove( ==> db <== )");
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
    /**
     * ### @Artic / Entity / vInject
     *
     * Injects the current instance into
     * any number of handlers provided as
     * a dependency.
     *
     * @param handlers
     */
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
    /**
     * ### @Artic / Entity / vJson
     *
     * Returns a JSON version of the
     * current instance.
     */
    Entity.prototype.vJson = function () {
        return JSON.stringify(this);
    };
    /**
     * ### @Artic / Entity / vMap
     *
     * Similiar to ***Array.prototype.map***,
     * vMap passes the current instance to a
     * map handler and returns the output of
     * the handler.
     *
     * Sometimes ***Entity***s have sensitive
     * information that does not necessary need
     * to be shared via an API. This provides a
     * way to create a function that handles creating
     * a safe rendition of the data wishing to be shared
     *
     * @param mapHandler
     */
    Entity.prototype.vMap = function (mapHandler) {
        return mapHandler(this);
    };
    /**
     * ### @Artic / Entity / vMapJson
     *
     * Similiar to ***Array.prototype.map***,
     * vMapJson passes the current instance to a
     * map handler and returns the output of
     * the handler as JSON.
     *
     * @param handler
     */
    Entity.prototype.vMapJson = function (handler) {
        return JSON.stringify(handler(this));
    };
    /**
     * ### @Artic / Entity / vEncrypt
     *
     * Returns an encrypted JSON version
     * of the current instance. It is encrypted
     * using AES-265-CBC with an initialization
     * vector.
     *
     * Format = [IV] : [EncryptedData]
     * @param key
     */
    Entity.prototype.vEncrypt = function (key) {
        return cryptobox_1.Cryptobox.encrypt(JSON.stringify(this), key);
    };
    /**
     * ### @Artic / Entity / vConsole
     *
     * ***console.log***'s the current instance
     * with color highlighting.
     */
    Entity.prototype.vConsole = function () {
        console.dir(this, {
            showHidden: false,
            depth: 4,
            colors: true
        });
    };
    /**
     * ### @Artic / Entity / vMapEncrypt
     *
     * Similiar to ***Array.prototype.map***,
     * vMapEncrypt passes the current instance to a
     * map handler and returns the output of
     * the handler as JSON that is encrypted.
     *
     * @param key
     * @param handler
     */
    Entity.prototype.vMapEncrypt = function (key, handler) {
        return cryptobox_1.Cryptobox.encrypt(JSON.stringify(handler(this)), key);
    };
    return Entity;
}());
exports.Entity = Entity;
