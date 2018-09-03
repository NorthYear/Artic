"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
/**
 * ### @Artic / Adapters / DevAdapter
 *
 * In memory store to allow the developer to
 * start working on the app without having current
 * working persistant layer. It console.logs data
 * as it would be written to persistance, though it
 * can be set to quiet mode.
 */
var DevAdapter = /** @class */ (function () {
    function DevAdapter() {
        /**
         * ### @Artic / Adapters / DevAdapter / Store
         *
         * The storage location for all in memory data
         */
        this.store = {};
        /**
         * ### @Artic / Adapters / DevAdapter / Quiet
         *
         * Whether or not the data should be consoled.
         */
        this.quiet = false;
    }
    /**
     * ### @Artic / Adapters / DevAdapter / Open
     *
     * Resolves void. Since in memory, this is only
     * satisfy the interface.
     */
    DevAdapter.prototype.open = function () {
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Count
     *
     * Count the number of records in a namespace
     * @param namespace
     */
    DevAdapter.prototype.count = function (namespace) {
        this.ensure(namespace);
        return Promise.resolve(Object.keys(this.store[namespace]).length);
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Close
     *
     * Resolves void. Since in memory, this only
     * satisfies the interface.
     */
    DevAdapter.prototype.close = function () {
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Has
     *
     * Determines if a namespace has a particular
     * key in memory
     *
     * @param namespace
     * @param key
     */
    DevAdapter.prototype.has = function (namespace, key) {
        this.ensure(namespace);
        return Promise.resolve(this.store[namespace][key] !== undefined);
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Empty
     *
     * Empty the entire store
     */
    DevAdapter.prototype.empty = function () {
        this.store = {};
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Empty Namespace
     *
     * Empty all records associated with a namespace
     * @param namespace
     */
    DevAdapter.prototype.emptyNamespace = function (namespace) {
        this.ensure(namespace);
        this.store[namespace] = {};
        return Promise.resolve();
    };
    /**
     * Helper method to ensure
     * that a namespace exists
     * @param namespace
     */
    DevAdapter.prototype.ensure = function (namespace) {
        if (this.store[namespace] === undefined) {
            this.store[namespace] = {};
        }
    };
    /**
     * Helper method to send record information
     * to the console for viewing
     * @param key
     * @param value
     */
    DevAdapter.prototype.logRecord = function (key, value) {
        if (this.quiet) {
            return;
        }
        var lines = [];
        lines.push(chalk_1.default.gray("Key:"));
        key.match(/.{1,100}/g).forEach(function (line) { return lines.push("  " + chalk_1.default.cyan(line)); });
        lines.push(chalk_1.default.gray("Value:"));
        value.match(/.{1,100}/g).forEach(function (line) { return lines.push("  " + chalk_1.default.green(line)); });
        var finalStatement = lines.map(function (line) { return "| " + line; });
        finalStatement.push("-----------------------------");
        console.log(finalStatement.join("\n"));
    };
    /**
     * Helper method to the namespace and
     * action to the console for viewing
     *
     * @param namespace
     * @param action
     */
    DevAdapter.prototype.logAction = function (namespace, action) {
        if (this.quiet) {
            return;
        }
        var lines = [
            "",
            "",
            chalk_1.default.blue("@" + namespace.toLowerCase()) + " " + chalk_1.default.green(action),
            "========================================"
        ];
        console.log(lines.join("\n"));
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Put
     *
     * Put a record in storage
     * @param namespace
     * @param key
     * @param value
     */
    DevAdapter.prototype.put = function (namespace, key, value) {
        this.ensure(namespace);
        this.store[namespace][key] = value;
        this.logAction(namespace, "put");
        this.logRecord(key, value);
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / PutMany
     *
     * Put many records in storage
     * @param namespace
     * @param values
     */
    DevAdapter.prototype.putMany = function (namespace, values) {
        var _this = this;
        this.ensure(namespace);
        this.logAction(namespace, "putMany");
        values.forEach(function (item) {
            _this.store[namespace][item.key] = item.value;
            _this.logRecord(item.key, item.value);
        });
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Remove
     *
     * Remove a record from storage
     *
     * @param namespace
     * @param key
     */
    DevAdapter.prototype.remove = function (namespace, key) {
        this.ensure(namespace);
        delete this.store[namespace][key];
        this.logAction(namespace, "remove");
        this.logRecord(key, "null");
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / RemoveMany
     *
     * Remove many records from storage
     * @param namespace
     * @param keys
     */
    DevAdapter.prototype.removeMany = function (namespace, keys) {
        var _this = this;
        this.ensure(namespace);
        keys.forEach(function (key) {
            delete _this.store[namespace][key];
        });
        this.logAction(namespace, "removeMany");
        this.logRecord(JSON.stringify(keys), "was removed");
        return Promise.resolve();
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Get
     *
     * Get a single record from storage
     * @param namespace
     * @param key
     */
    DevAdapter.prototype.get = function (namespace, key) {
        var _this = this;
        this.ensure(namespace);
        return new Promise(function (done, error) {
            if (_this.store[namespace][key]) {
                var value = _this.store[namespace][key];
                _this.logAction(namespace, "get");
                _this.logRecord(key, value);
                done(value);
                return;
            }
            throw new Error(key + " does not exist in store for " + namespace);
        });
    };
    /**
     * ### @Artic / Adapters / DevAdapter / GetMany
     *
     * Get many records from storage
     * @param namespace
     * @param keys
     */
    DevAdapter.prototype.getMany = function (namespace, keys) {
        var _this = this;
        this.ensure(namespace);
        this.logAction(namespace, "getMany");
        return new Promise(function (done, error) {
            var values = [];
            keys.forEach(function (key) {
                if (_this.store[namespace][key]) {
                    var value = _this.store[namespace][key];
                    _this.logRecord(key, value);
                    values.push(value);
                    return;
                }
                throw new Error(key + " does not exist in store for " + namespace);
            });
            done(values);
        });
    };
    /**
     * ### @Artic / Adapters / DevAdapter
     *
     * Get all records from storage in a
     * namespace
     * @param namespace
     */
    DevAdapter.prototype.all = function (namespace) {
        var _this = this;
        this.ensure(namespace);
        this.logAction(namespace, "all");
        return new Promise(function (done, error) {
            var store = _this.store[namespace];
            var items = [];
            for (var iterator in store) {
                items.push(store[iterator]);
                _this.logRecord(iterator, store[iterator]);
            }
            done(items);
        });
    };
    /**
     * ### @Artic / Adapters / DevAdapter / Stream
     *
     * Stream records from storage in a particular
     * namespace
     * @param namespace
     * @param handler
     */
    DevAdapter.prototype.stream = function (namespace, handler) {
        var _this = this;
        this.ensure(namespace);
        this.logAction(namespace, "stream");
        return new Promise(function (done, error) {
            var store = _this.store[namespace];
            var aborted = false;
            for (var iterator in store) {
                if (aborted) {
                    break;
                }
                _this.logRecord(iterator, store[iterator]);
                handler(iterator, store[iterator], function () {
                    aborted = true;
                });
            }
            done();
        });
    };
    return DevAdapter;
}());
exports.DevAdapter = DevAdapter;
