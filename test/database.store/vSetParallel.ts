import { Article, allDB } from "../model";
export function vSetParallel(done) {
    let imageStore = Article.vStore("images");
    let images = [
        "image.jpg",
        "image.2.jpg"
    ];
    imageStore.vSet(allDB, "id-2", images).then(() => {
        imageStore.vHas(allDB, "id-2").then(bool => {
            expect(bool).toBe(true);
            done();
        });
    });
}
