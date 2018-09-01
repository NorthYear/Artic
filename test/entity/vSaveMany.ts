import { Article, mainDB } from "../model";
export function vSaveMany(done) {
    let articles = Article.vSeed(100, article => {
        article.title = "title";
        article.content = "content";
    });
    Article.vSaveMany(mainDB, articles).then(articles => {
        articles.forEach(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(article.title).toBe("title");
            expect(article.content).toBe("content");
        });
        done();
    });
}
