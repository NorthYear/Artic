export namespace Exceptions {

    export function view(title: string, ...msgs) {
        let list = msgs.map(msg => "+ " + msg);
        list.unshift("--------------------------------");
        list.unshift(title);
        return list.join("\n");
    }

    export function error(...msgs: string[]) {
        throw new Error(
            view("@Artic / Error", ...msgs)
        )
    }

    export function warning(...msgs: string[]) {
        console.warn(
            view("@Artic / Warning", ...msgs)
        );
    }
}