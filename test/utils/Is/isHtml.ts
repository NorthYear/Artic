import { Is } from "../../../src/utils/is";
//string
//boolean
//function
//array
//object
//undefined
//null
//error
export function isHtml() {
    expect(Is.html("<script>")).toBe(true);
    expect(Is.html("something <div>white</div>")).toBe(true);
    expect(Is.html("lskdjlkjsdf")).toBe(false);
}
