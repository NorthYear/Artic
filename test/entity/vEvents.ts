import { Article, mainDB } from "../model";
import { EventEmitter } from "events";
export function vEvents() {
    expect(Article.vEvents(mainDB)).toBeInstanceOf(EventEmitter);
}
