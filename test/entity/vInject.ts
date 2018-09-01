import { Article } from "../model";
export function vInject(done) {
    Article.vNew({
        title: "title",
        content: "content"
    }).vInject(article => {
        expect(article.title).toBe("title");
        expect(article.content).toBe("content");
        done();
    });
}
