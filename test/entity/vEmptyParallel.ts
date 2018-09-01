import { Article, allDB } from "../model";
export function vEmptyParallel(done) {
    Article.vEmpty(allDB).then(() => {
        Article.vCount(allDB).then(count => {
            expect(count).toBe(0);
            done();
        });
    });
}
