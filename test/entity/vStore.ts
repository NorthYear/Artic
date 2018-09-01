import { Article } from "../model";
import { DatabaseStore } from "../../src/database.store";
export function vStore() {
    expect(Article.vStore("featured.images")).toBeInstanceOf(DatabaseStore);
}
