import { Article, mainDB, allDB } from "../model";
export function vHasParallel(done) {
    Article.vNew({
        title: "title",
        content: "content"
    }).vSave(mainDB).then(article => {
        Promise.all([
            Article.vHas(allDB, article.id).then(bool => {
                expect(bool).toBe(true);
            }),
            Article.vHas(allDB, "lskdjflkjsdf").then(bool => {
                expect(bool).toBe(false);
            })
        ]).then(() => {
            done();
        });
    });
}
