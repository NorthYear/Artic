import { consoleAdapter } from "./testing";
export function logRecord(done) {
    let log = jest.spyOn(console, "log").mockImplementationOnce(() => {
        done();
    });
    consoleAdapter.logRecord("lskdjf", "lskjdflkj");
    expect(log).toBeCalled();
}
