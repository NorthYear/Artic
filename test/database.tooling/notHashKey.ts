import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function notHashKey() {
    let hashedKey = DatabaseToolingDecorators.hashKey({
        hashKeys: false
    })("key");
    expect(hashedKey === "key").toBe(true);
}
