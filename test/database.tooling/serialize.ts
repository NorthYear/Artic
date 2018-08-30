import { DatabaseToolingDecorators } from "../../src/database.tooling";
import { Serializer } from "../../src/utils/serializer";
export function serialize() {
    class User {
        name: string;
    }
    let options = { encryptionKey: null };
    let serializer = new Serializer({ User }, "");
    let userString = DatabaseToolingDecorators.serialize(options, serializer)(new User);
    expect(/\{\"\#artic\-instance\-type\"\:\"User\"\}/g.test(userString)).toBe(true);
}
