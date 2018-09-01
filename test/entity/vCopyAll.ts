import { Article, mainDB, copyDB } from "../model";
export function vCopyAll(done) {
    Article.vCopyAll(mainDB, copyDB).then(() => {
        Promise.all([
            Article.vCount(mainDB),
            Article.vCount(copyDB)
        ]).then(counts => {
            expect(counts[0]).toBe(counts[1]);
            done();
        });
    });
}
