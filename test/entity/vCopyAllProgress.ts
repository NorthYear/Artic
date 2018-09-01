import { Article, copyDB, mainDB } from "../model";
export function vCopyAllProgress(done) {
    Article.vCopyAll(mainDB, copyDB, percentage => {
        expect(typeof percentage).toBe("number");
    }).then(() => {
        Promise.all([
            Article.vCount(mainDB),
            Article.vCount(copyDB)
        ]).then(counts => {
            expect(counts[0]).toBe(counts[1]);
            done();
        });
    });
}
