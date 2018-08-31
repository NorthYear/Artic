import { consoleAdapter } from "./testing";
export function logAction(done) {
    let log = jest.spyOn(console, "log").mockImplementationOnce(() => {
        done();
    });
    consoleAdapter.logAction("lskdjf", "lskjdflkj");
    expect(log).toBeCalled();
}
