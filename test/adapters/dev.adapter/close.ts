import { adapter } from "./testing";
export function close(done) {
    adapter.close().then(value => {
        expect(value).toBe(void 0);
        done();
    });
}
