import { Serializer } from "../../../src/utils/serializer";
import { Something } from "./Something";

export function serialize() {
    let serializer = new Serializer({ Something, Date }, "namespace");
    let instance = new Something;
    let string = serializer.stringify(instance);
    expect(typeof string).toBe("string");
    expect(/\"#artic-instance-type\"\:\"Something\"/g.test(string)).toBe(true);
}
