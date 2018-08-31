import { adapter } from "./testing";
export function count(done) {
    adapter.count("main/user").then(value => {
        expect(value).toBe(100);
        done();
    });
}
