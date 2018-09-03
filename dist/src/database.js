"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dev_adapter_1 = require("./adapters/dev.adapter");
var database_instance_1 = require("./database.instance");
var database_parallel_instance_1 = require("./database.parallel.instance");
var database_tooling_1 = require("./database.tooling");
var is_1 = require("./utils/is");
var serializer_1 = require("./utils/serializer");
var validations_1 = require("./utils/validations");
/**
 * ### @Artic / Database
 *
 * ***Database*** is the main entry point
 * for creating database instances.
 */
var Database;
(function (Database) {
    /**
     * ### @Artic / Database / vMake
     *
     * Creates a new database instance given
     * a name and options
     * @param name
     * @param options
     */
    function vMake(name, options) {
        options = Object.assign({}, options);
        validations_1.Validations.validateOptions(options, name);
        var serializer = new serializer_1.Serializer(options.context, name);
        var database = new database_instance_1.DatabaseInstance(name);
        database.adapter = is_1.Is.nil(options.adapter) ? new dev_adapter_1.DevAdapter() : options.adapter;
        database.tooling.hashNamespace = database_tooling_1.DatabaseToolingDecorators.hashNamespace(options);
        database.tooling.hashKey = database_tooling_1.DatabaseToolingDecorators.hashKey(options);
        database.tooling.serialize = database_tooling_1.DatabaseToolingDecorators.serialize(options, serializer);
        database.tooling.unserialize = database_tooling_1.DatabaseToolingDecorators.unserialize(options, serializer);
        database.tooling.setEncryptionKey = database_tooling_1.DatabaseToolingDecorators.setEncryptionKey(options, name);
        return database;
    }
    Database.vMake = vMake;
    /**
     * ### @Artic / Database / vParallel
     *
     * Creates a ***DatabaseParallelInstance*** combining
     * more than one database instance to persist to
     * more than one location at the same time. All
     * writes will persist to every combined instance
     * while all reads will be read from only the first
     * instance provided.
     *
     * @param databases
     */
    function vParallel() {
        var databases = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            databases[_i] = arguments[_i];
        }
        return new database_parallel_instance_1.DatabaseParallelInstance(databases);
    }
    Database.vParallel = vParallel;
})(Database = exports.Database || (exports.Database = {}));
