import { Serializer } from "../../../src/utils/serializer";
import { Something } from "./Something";

export function workWithArrays() {
    let somethings = [new Something, new Something, {}];
    let serializer = new Serializer({ Something, Date }, "namespace");
    let string = serializer.stringify(somethings);
    expect(typeof string).toBe("string");
    expect(/\"#artic-instance-type\"\:\"Something\"/g.test(string)).toBe(true);
    let list = serializer.parse<Something[]>(string);
    expect(Array.isArray(list)).toBe(true);
}
