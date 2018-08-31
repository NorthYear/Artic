import { Validations } from "../../../../src/utils/validations";
export function validateAdapter() {
    Validations.validateAdapter({
        adapter: {
            open: (namespace: string) => Promise.resolve(),
            close: (namespace: string) => Promise.resolve(),
            count: (namespace: string) => Promise.resolve(1),
            has: (namespace: string, key: string) => Promise.resolve(true),
            put: (namespace: string, key: string, value: string) => Promise.resolve(),
            putMany: (namespace: string, values: {
                key: string;
                value: string;
            }[]) => Promise.resolve(),
            get: (namespace: string, key: string) => Promise.resolve(""),
            getMany: (namespace: string, keys: string[]) => Promise.resolve([]),
            remove: (namespace: string, key: string) => Promise.resolve(),
            removeMany: (namespace: string, keys: string[]) => Promise.resolve(),
            all: (namespace: string) => Promise.resolve([]),
            stream: (namespace: string, handler: (key: string, value: string, abort: Function) => void) => Promise.resolve(),
            emptyNamespace: (namespace: string) => Promise.resolve(),
            empty: () => Promise.resolve()
        }
    });
}
