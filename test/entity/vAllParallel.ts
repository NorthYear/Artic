import { Article, allDB } from "../model";
export function vAllParallel(done) {
    Article.vAll(allDB).then(articles => {
        expect(Array.isArray(articles)).toBe(true);
        articles.forEach(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(typeof article.title).toBe("string");
            expect(typeof article.content).toBe("string");
        })
        done();
    });
}
