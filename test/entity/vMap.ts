import { Article } from "../model";
export function vMap() {
    let titleString = Article.vNew({
        title: "title",
        content: "content"
    }).vMap(article => {
        return `Hello, my title is "${article.title}"`;
    });
    expect(titleString).toBe("Hello, my title is \"title\"");
}
