/// <reference types="node" />
import { EventEmitter } from "events";
/**
 * ### @Artic / Database / DatabaseEventStore
 *
 * The ***DatabasseEventStore*** creates and caches
 * ***EventEmitter*** instances to remember all
 * subscribers state. Primarily used for entities
 * and their direct relationships to ***DatabaseInstance***(s).
 *
 * This class only represents a way of storing emitters and can
 * be used for other reasons.
 */
export declare class DatabaseEventStore {
    /**
     * ### @Artic / Database / DatabaseEventStore / Events
     *
     * The events property holds a global emitter that
     * it used for global subscriptions under a
     * particular context.
     *
     * @type {EventEmitter}
     */
    events: EventEmitter;
    /**
     * ### @Artic / Database / DatabaseEventStore / Emitters
     *
     * The emiiters property is a object cache for any and
     * all emitters.
     *
     * @type {[key: string] : EventEmitter}
     */
    private emitters;
    /**
     * ### @Artic / Database / DatabaseEventStore / For
     *
     * If an ***EventEmitter*** has been created, the cached
     * version will be returned to keep the same state. If not,
     * a new ***EventEmitter*** will be created and returned.
     * @param namespace
     */
    for(namespace: string): EventEmitter;
}
