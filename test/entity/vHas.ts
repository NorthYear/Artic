import { Article, mainDB } from "../model";
export function vHas(done) {
    Article.vNew({
        title: "title",
        content: "content"
    }).vSave(mainDB).then(article => {
        Promise.all([
            Article.vHas(mainDB, article.id).then(bool => {
                expect(bool).toBe(true);
            }),
            Article.vHas(mainDB, "lskdjflkjsdf").then(bool => {
                expect(bool).toBe(false);
            })
        ]).then(() => {
            done();
        });
    });
}
