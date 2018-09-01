import { Article, mainDB } from "../model";
export function vSet(done) {
    let imageStore = Article.vStore("images");
    let images = [
        "image.jpg",
        "image.2.jpg"
    ];
    imageStore.vSet(mainDB, "id-1", images).then(() => {
        imageStore.vHas(mainDB, "id-1").then(bool => {
            expect(bool).toBe(true);
            done();
        });
    });
}
