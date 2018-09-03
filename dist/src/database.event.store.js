"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
/**
 * ### @Artic / Database / DatabaseEventStore
 *
 * The ***DatabasseEventStore*** creates and caches
 * ***EventEmitter*** instances to remember all
 * subscribers state. Primarily used for entities
 * and their direct relationships to ***DatabaseInstance***(s).
 *
 * This class only represents a way storing emitters and can
 * be used for other reasons.
 */
var DatabaseEventStore = /** @class */ (function () {
    function DatabaseEventStore() {
        /**
         * ### @Artic / Database / DatabaseEventStore / Events
         *
         * The events property holds a global emitter that
         * it used for global subscriptions under a
         * particular context.
         *
         * @type {EventEmitter}
         */
        this.events = new events_1.EventEmitter();
        /**
         * ### @Artic / Database / DatabaseEventStore / Emitters
         *
         * The emiiters property is a object cache for any and
         * all emitters.
         *
         * @type {[key: string] : EventEmitter}
         */
        this.emitters = {};
    }
    /**
     * ### @Artic / Database / DatabaseEventStore / For
     *
     * If an ***EventEmitter*** has been created, the cached
     * version will be returned to keep the same state. If not,
     * a new ***EventEmitter*** will be created and returned.
     * @param namespace
     */
    DatabaseEventStore.prototype.for = function (namespace) {
        if (this.emitters[namespace] === undefined) {
            this.emitters[namespace] = new events_1.EventEmitter();
        }
        return this.emitters[namespace];
    };
    return DatabaseEventStore;
}());
exports.DatabaseEventStore = DatabaseEventStore;
