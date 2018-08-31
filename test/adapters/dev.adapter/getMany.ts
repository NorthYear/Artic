import { adapter } from "./testing";
export function getMany(done) {
    adapter.getMany("main/user", ["1", "5", "8"]).then(values => {
        expect(values[0]).toBe("user-data-for-1");
        expect(values[1]).toBe("user-data-for-5");
        expect(values[2]).toBe("user-data-for-8");
        done();
    });
}
