import { Article, allDB } from "../model";
export function vFindParallel(done) {
    let article = new Article();
    article.title = "title";
    article.content = "content";
    article.vSave(allDB).then(article => {
        Article.vFind(allDB, article.id).then(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(article.title).toBe("title");
            expect(article.content).toBe("content");
            done();
        });
    });
}
