import { adapter } from "./testing";
export function open(done) {
    adapter.open().then(value => {
        expect(value).toBe(void 0);
        done();
    });
}
