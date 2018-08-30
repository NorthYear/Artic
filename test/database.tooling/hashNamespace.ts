import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function hashNamespace() {
    let hashedNamespace = DatabaseToolingDecorators.hashNamespace({
        hashNamespace: true
    })("name");
    expect(hashedNamespace !== "name").toBe(true);
}
