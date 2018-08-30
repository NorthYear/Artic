import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function hashKey() {
    let hashedKey = DatabaseToolingDecorators.hashKey({
        hashKeys: true
    })("key");
    expect(hashedKey !== "key").toBe(true);
}
