import { Article } from "../model";
export function vJson() {
    let json = Article.vNew({
        title: "title",
        content: "content"
    }).vJson();
    expect(typeof json).toBe("string");
}
