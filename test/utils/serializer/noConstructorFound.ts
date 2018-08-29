import { Serializer } from "../../../src/utils/serializer";

export function noConstructorFound(done) {
    let warn = jest.spyOn(console, "warn").mockImplementationOnce(() => {
        done();
    })
    expect(() => {
        var serializer = new Serializer({
            Broken: this
        }, "testing");
        expect(warn).toBeCalled();
        serializer.parse('{"#artic-instance-type":"Broken"}');
    }).toThrow();
}
