import { Article, allDB } from "../model";
export function vStreamParallel(done) {
    let articles: Article[] = [];
    Article.vStream(allDB, (article, abort) => {
        articles.push(article);
        abort();
    }).then(() => {
        expect(Array.isArray(articles)).toBe(true);
        expect(articles.length).toBe(1);
        articles.forEach(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(typeof article.title).toBe("string");
            expect(typeof article.content).toBe("string");
        });
        done();
    });
}
