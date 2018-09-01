import { Article, allDB } from "../model";
import { EventEmitter } from "events";
export function vEventsParallel() {
    expect(Article.vEvents(allDB)).toBeInstanceOf(EventEmitter);
}
