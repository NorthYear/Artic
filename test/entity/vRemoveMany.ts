import { Article, mainDB, allDB } from "../model";
export function vRemoveMany(done) {
    let articles = Article.vSeed(100, article => {
        article.title = "title";
        article.content = "content";
    });
    Article.vSaveMany(allDB, articles).then(articles => {
        Article.vRemoveMany(mainDB, articles.map(a => a.id)).then(() => {
            Promise.all(articles.map(article => Article.vHas(mainDB, article.id))).then(bools => {
                bools.forEach(bool => {
                    expect(bool).toBe(false);
                });
                done();
            });
        });
    });
}
