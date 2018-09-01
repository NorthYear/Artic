import { Article, mainDB, allDB } from "../model";
export function vFind(done) {
    let article = new Article();
    article.title = "title";
    article.content = "content";
    article.vSave(allDB).then(article => {
        Article.vFind(mainDB, article.id).then(article => {
            expect(typeof article.id).toBe("string");
            expect(article.created).toBeInstanceOf(Date);
            expect(article.updated).toBeInstanceOf(Date);
            expect(article.title).toBe("title");
            expect(article.content).toBe("content");
            done();
        });
    });
}
