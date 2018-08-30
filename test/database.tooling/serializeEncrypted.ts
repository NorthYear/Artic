import { DatabaseToolingDecorators } from "../../src/database.tooling";
import { Serializer } from "../../src/utils/serializer";
export function serializeEncrypted() {
    class User {
        name: string;
    }
    let options = { encryptionKey: process.env.ENCRYPTION_KEY };
    var serializer = new Serializer({ User }, "");
    let userString = DatabaseToolingDecorators.serialize(options, serializer)(new User);
    expect(/\{\"\#artic\-instance\-type\"\:\"User\"\}/g.test(userString)).toBe(false);
    expect(userString.indexOf(":")).toBe(32);
}
