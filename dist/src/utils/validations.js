"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var exceptions_1 = require("./exceptions");
var brander_1 = require("./brander");
var Validations;
(function (Validations) {
    function ensureDatabaseLike(database, entity, method) {
        if (!is_1.Is.databaseInstanceLike(database)) {
            exceptions_1.Exceptions.articError("Oops! Did you forget the database instance", "=> " + brander_1.Brander.getClassName(entity) + "." + method + " requires a database instance or parallel database instance to work.");
        }
    }
    Validations.ensureDatabaseLike = ensureDatabaseLike;
    function ensureDatabase(database, entity, method) {
        if (!is_1.Is.databaseInstanceLike(database)) {
            exceptions_1.Exceptions.articError("Oops! Did you forget the database instance", "=> " + brander_1.Brander.getClassName(entity) + "." + method + " requires a database instance to work.");
        }
    }
    Validations.ensureDatabase = ensureDatabase;
    function validateAdapter(options) {
        if (options.devMode === true) {
            exceptions_1.Exceptions.articWarning("You are using the current adapter in dev mode", "   - The adapter was not not checked for validity");
            return;
        }
        if (is_1.Is.nil(options.adapter)) {
            return;
        }
        var missingMethods = [];
        !is_1.Is.fn(options.adapter.all) ? missingMethods.push("all") : null;
        !is_1.Is.fn(options.adapter.empty) ? missingMethods.push("empty") : null;
        !is_1.Is.fn(options.adapter.emptyNamespace) ? missingMethods.push("emptyNamepace") : null;
        !is_1.Is.fn(options.adapter.get) ? missingMethods.push("get") : null;
        !is_1.Is.fn(options.adapter.getMany) ? missingMethods.push("getMany") : null;
        !is_1.Is.fn(options.adapter.put) ? missingMethods.push("put") : null;
        !is_1.Is.fn(options.adapter.putMany) ? missingMethods.push("putMany") : null;
        !is_1.Is.fn(options.adapter.remove) ? missingMethods.push("remove") : null;
        !is_1.Is.fn(options.adapter.removeMany) ? missingMethods.push("removeMany") : null;
        !is_1.Is.fn(options.adapter.stream) ? missingMethods.push("stream") : null;
        if (missingMethods.length > 0) {
            options.adapter = undefined;
            exceptions_1.Exceptions.articWarning("The current installed adapter does not match the specification for an adapter.", "   It will be replaced with the built-in \"Console Adapter\" for the time being.", "   The adapter is missing methods: " + missingMethods.join(" | "));
        }
    }
    Validations.validateAdapter = validateAdapter;
    function validateEncryptionKey(options, databaseName) {
        if (is_1.Is.nil(options.encryptionKey)) {
            return false;
        }
        if (is_1.Is.str(options.encryptionKey)) {
            if (!is_1.Is.strLength(options.encryptionKey, 32)) {
                exceptions_1.Exceptions.articError("[" + databaseName + "]->[options]->encryptionKey is set to string, but it must be a string 32 character is length.");
            }
        }
        else {
            exceptions_1.Exceptions.articError("[" + databaseName + "]->[options]->encryptionKey is set, but it must be a string.", "   hint: Instead got typeof " + typeof options.encryptionKey);
        }
        return true;
    }
    Validations.validateEncryptionKey = validateEncryptionKey;
    function validateContext(options) {
        if (!is_1.Is.obj(options.context)) {
            options.context = {};
        }
        options.context["Date"] = Date;
    }
    Validations.validateContext = validateContext;
    function validateHashOptions(options, databaseName) {
        is_1.Is.nil(options.hashKeys) ? options.hashKeys = false : null;
        is_1.Is.nil(options.hashNamespace) ? options.hashNamespace = false : null;
        if (!is_1.Is.bool(options.hashKeys)) {
            exceptions_1.Exceptions.articError("Vallow => Database(" + databaseName + ") => Options(hashKeys) is set, but it must be a boolean value.", "   hint: Instead got typeof " + is_1.Is.type(options.hashKeys));
        }
        if (!is_1.Is.bool(options.hashNamespace)) {
            exceptions_1.Exceptions.articError("[" + databaseName + "]->[options]->hashNamespace is set, but it must be a boolean value.", "   hint: Instead got typeof " + is_1.Is.type(options.hashNamespace));
        }
    }
    Validations.validateHashOptions = validateHashOptions;
    function validateOptions(options, databaseName) {
        if (databaseName === void 0) { databaseName = ""; }
        validateAdapter(options);
        validateEncryptionKey(options, databaseName);
        validateContext(options);
        validateHashOptions(options, databaseName);
    }
    Validations.validateOptions = validateOptions;
})(Validations = exports.Validations || (exports.Validations = {}));
