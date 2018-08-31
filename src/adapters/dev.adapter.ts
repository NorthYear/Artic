import { AdapterInterface } from "../interfaces/adapter.interface";
import chalk from "chalk";

/**
 * ### @Artic / Adapters / DevAdapter
 * 
 * In memory store to allow the developer to
 * start working on the app without having current
 * working persistant layer. It console.logs data
 * as it would be written to persistance, though it
 * can be set to quiet mode.
 */
export class DevAdapter implements AdapterInterface {

    /**
     * ### @Artic / Adapters / DevAdapter / Store
     * 
     * The storage location for all in memory data
     */
    public store = {}

    /**
     * ### @Artic / Adapters / DevAdapter / Quiet
     * 
     * Whether or not the data should be consoled.
     */
    public quiet: boolean = false;

    /**
     * ### @Artic / Adapters / DevAdapter / Open
     * 
     * Resolves void. Since in memory, this is only
     * satisfy the interface.
     */
    public open() {
        return Promise.resolve();
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Count
     * 
     * Count the number of records in a namespace
     * @param namespace 
     */
    public count(namespace: string) {
        this.ensure(namespace);
        return Promise.resolve(Object.keys(this.store[namespace]).length);
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Close
     * 
     * Resolves void. Since in memory, this only 
     * satisfies the interface.
     */
    public close() {
        return Promise.resolve();
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Has
     * 
     * Determines if a namespace has a particular
     * key in memory
     * 
     * @param namespace 
     * @param key 
     */
    public has(namespace: string, key: string) {
        this.ensure(namespace);
        return Promise.resolve(this.store[namespace][key] !== undefined);
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Empty
     * 
     * Empty the entire store
     */
    public empty() {
        this.store = {};
        return Promise.resolve();
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Empty Namespace
     * 
     * Empty all records associated with a namespace
     * @param namespace 
     */
    public emptyNamespace(namespace: string) {
        this.ensure(namespace);
        this.store[namespace] = {};
        return Promise.resolve();
    }


    /**
     * Helper method to ensure
     * that a namespace exists
     * @param namespace 
     */
    private ensure(namespace) {
        if (this.store[namespace] === undefined) {
            this.store[namespace] = {}
        }
    }

    /**
     * Helper method to send record information
     * to the console for viewing
     * @param key 
     * @param value 
     */
    public logRecord(key: string, value: string) {
        if (this.quiet) { return }
        let lines: string[] = [];
        lines.push(chalk.gray("Key:"));
        key.match(/.{1,100}/g).forEach(line => lines.push("  " + chalk.cyan(line)));
        lines.push(chalk.gray("Value:"))
        value.match(/.{1,100}/g).forEach(line => lines.push("  " + chalk.green(line)));
        let finalStatement = lines.map(line => "| " + line)
        finalStatement.push("-----------------------------");
        console.log(finalStatement.join("\n"));
    }


    /**
     * Helper method to the namespace and
     * action to the console for viewing
     * 
     * @param namespace 
     * @param action 
     */
    public logAction(namespace, action: string) {
        if (this.quiet) { return }
        let lines = [
            "",
            "",
            chalk.blue("@" + namespace.toLowerCase()) + " " + chalk.green(action),
            "========================================"
        ]
        console.log(lines.join("\n"));
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Put
     * 
     * Put a record in storage
     * @param namespace 
     * @param key 
     * @param value 
     */
    public put(namespace: string, key: string, value: string) {
        this.ensure(namespace);
        this.store[namespace][key] = value;
        this.logAction(namespace, "put");
        this.logRecord(key, value);
        return Promise.resolve()
    }

    /**
     * ### @Artic / Adapters / DevAdapter / PutMany
     * 
     * Put many records in storage
     * @param namespace 
     * @param values 
     */
    public putMany(namespace: string, values: { key: string, value: string }[]) {
        this.ensure(namespace);
        this.logAction(namespace, "putMany");
        values.forEach(item => {
            this.store[namespace][item.key] = item.value;
            this.logRecord(item.key, item.value);
        })
        return Promise.resolve()
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Remove
     * 
     * Remove a record from storage
     * 
     * @param namespace 
     * @param key 
     */
    public remove(namespace, key: string) {
        this.ensure(namespace);
        delete this.store[namespace][key];
        this.logAction(namespace, "remove");
        this.logRecord(key, "null");
        return Promise.resolve()
    }

    /**
     * ### @Artic / Adapters / DevAdapter / RemoveMany
     * 
     * Remove many records from storage
     * @param namespace 
     * @param keys 
     */
    public removeMany(namespace, keys: string[]) {
        this.ensure(namespace);
        keys.forEach(key => {
            delete this.store[namespace][key]
        })
        this.logAction(namespace, "removeMany");
        this.logRecord(JSON.stringify(keys), "was removed");
        return Promise.resolve();
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Get
     * 
     * Get a single record from storage
     * @param namespace 
     * @param key 
     */
    public get(namespace: string, key: string): Promise<string> {
        this.ensure(namespace);
        return new Promise((done, error) => {
            if (this.store[namespace][key]) {
                let value = this.store[namespace][key];
                this.logAction(namespace, "get");
                this.logRecord(key, value);
                done(value);
                return;
            }
            throw new Error(`${key} does not exist in store for ${namespace}`);
        })
    }

    /**
     * ### @Artic / Adapters / DevAdapter / GetMany
     * 
     * Get many records from storage
     * @param namespace 
     * @param keys 
     */
    public getMany(namespace: string, keys: string[]): Promise<string[]> {
        this.ensure(namespace);
        this.logAction(namespace, "getMany");
        return new Promise((done, error) => {
            var values: string[] = [];
            keys.forEach(key => {
                if (this.store[namespace][key]) {
                    let value = this.store[namespace][key];
                    this.logRecord(key, value);
                    values.push(value);
                    return
                }
                throw new Error(`${key} does not exist in store for ${namespace}`);
            })
            done(values);
        })
    }

    /**
     * ### @Artic / Adapters / DevAdapter
     * 
     * Get all records from storage in a
     * namespace
     * @param namespace 
     */
    public all(namespace: string): Promise<string[]> {
        this.ensure(namespace);
        this.logAction(namespace, "all");
        return new Promise((done, error) => {
            let store = this.store[namespace];
            let items: string[] = [];
            for (var iterator in store) {
                items.push(store[iterator]);
                this.logRecord(iterator, store[iterator]);
            }
            done(items);
        })
    }

    /**
     * ### @Artic / Adapters / DevAdapter / Stream
     * 
     * Stream records from storage in a particular
     * namespace
     * @param namespace 
     * @param handler 
     */
    public stream(namespace: string, handler: (key: string, value: string, abort: Function) => void): Promise<void> {
        this.ensure(namespace);
        this.logAction(namespace, "stream");
        return new Promise((done, error) => {
            let store = this.store[namespace];
            let aborted = false;
            for (var iterator in store) {
                if (aborted) {
                    break;
                }
                this.logRecord(iterator, store[iterator]);
                handler(iterator, store[iterator], () => {
                    aborted = true;
                })
            }
            done();
        })
    }
}
