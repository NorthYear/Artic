import { AdapterInterface } from "./adapter.interface";

export interface DatabaseOptionsInterface {
    adapter?: AdapterInterface;
    encryptionKey?: string;
    context?: { [key: string]: new () => any };
    hashNamespace?: boolean;
    hashKeys?: boolean;
    devMode?: boolean;
}
