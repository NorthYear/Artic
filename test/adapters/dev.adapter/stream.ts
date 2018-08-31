import { adapter } from "./testing";
export function stream(done) {
    adapter.stream("main/user", (key, value, abort) => {
        if (parseInt(key) > 65) {
            expect(typeof value).toBe("string");
            expect(typeof key).toBe("string");
            abort();
        }
    }).then(() => {
        done();
    });
}
