import { Article } from "../model";
export function vMapJson() {
    let json = Article.vNew({
        title: "title",
        content: "content"
    }).vMapJson(article => {
        return {
            title: article.title,
            content: article.content,
            titleLength: article.title.length
        };
    });
    expect(typeof json).toBe("string");
}
