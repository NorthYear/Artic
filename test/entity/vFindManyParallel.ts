import { Article, allDB } from "../model";
export function vFindManyParallel(done) {
    let articles = Article.vSeed(100, article => {
        article.title = "title";
        article.content = "content";
    });
    Article.vSaveMany(allDB, articles).then(articles => {
        Article.vFindMany(allDB, articles.map(a => a.id)).then(articles => {
            articles.forEach(article => {
                expect(typeof article.id).toBe("string");
                expect(article.created).toBeInstanceOf(Date);
                expect(article.updated).toBeInstanceOf(Date);
                expect(article.title).toBe("title");
                expect(article.content).toBe("content");
                done();
            });
        });
    });
}
