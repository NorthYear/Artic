import { DatabaseToolingDecorators } from "../../src/database.tooling";
export function notHashNamespace() {
    let hashedNamespace = DatabaseToolingDecorators.hashNamespace({
        hashNamespace: false
    })("name");
    expect(hashedNamespace).toBe("name");
}
