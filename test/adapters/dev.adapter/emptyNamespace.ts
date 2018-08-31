import { adapter } from "./testing";
export function emptyNamespace(done) {
    let records = [];
    for (let i = 2; i <= 100; i++) {
        records.push({
            key: i.toString(),
            value: "alternate-data-for-" + i.toString()
        });
    }
    adapter.putMany("main/alternate", records).then(() => {
        adapter.emptyNamespace("main/alternate").then(() => {
            adapter.count("main/alternate").then(count => {
                expect(count).toBe(0);
                done();
            });
        });
    });
}
