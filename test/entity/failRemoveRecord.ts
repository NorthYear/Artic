import { Article, mainDB } from "../model";
export function failRemoveRecord() {
    expect(() => {
        Article.vNew().vRemove(mainDB);
    }).toThrow();
}
