import { Serializer } from "../../../src/utils/serializer";

export function noConstructorFound() {
    expect(() => {
        var serializer = new Serializer({
            Broken: this
        }, "testing");
        serializer.parse('{"#artic-instance-type":"Broken"}');
    }).toThrow();
}
