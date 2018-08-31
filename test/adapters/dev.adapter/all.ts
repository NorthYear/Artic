import { adapter } from "./testing";
export function all(done) {
    adapter.all("main/user").then(values => {
        expect(Array.isArray(values)).toBe(true);
        expect(values.length).toBe(97);
        done();
    });
}
