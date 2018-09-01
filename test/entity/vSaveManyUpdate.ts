import { Article, mainDB } from "../model";
export function vSaveManyUpdate(done) {
    let articles = Article.vSeed(100, article => {
        article.title = "title";
        article.content = "content";
    });
    Article.vSaveMany(mainDB, articles).then(articles => {
        articles.forEach(article => {
            article.title = "something-else";
            article.content = "something-else";
        });
        Article.vSaveMany(mainDB, articles).then(() => {
            articles.forEach(article => {
                expect(typeof article.id).toBe("string");
                expect(article.created).toBeInstanceOf(Date);
                expect(article.updated).toBeInstanceOf(Date);
                expect(article.title).toBe("something-else");
                expect(article.content).toBe("something-else");
            });
            done();
        });
    });
}
