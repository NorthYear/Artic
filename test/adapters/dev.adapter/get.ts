import { adapter } from "./testing";
export function get(done) {
    adapter.get("main/user", "1").then(value => {
        expect(value).toBe("user-data-for-1");
        done();
    });
}
