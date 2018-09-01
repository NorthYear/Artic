import { Article, mainDB } from "../model";
export function vEmpty(done) {
    Article.vEmpty(mainDB).then(() => {
        Article.vCount(mainDB).then(count => {
            expect(count).toBe(0);
            done();
        });
    });
}
