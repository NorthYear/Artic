/**
 * ### @Artic / Utils / Exceptions
 * 
 * Module for handle errors/exceptions
 */
export namespace Exceptions {

    /**
     * ### @Artic / Utils / Exceptions / View
     * 
     * Template for a nice user readable exception 
     * @param title 
     * @param msgs 
     */
    export function view(title: string, ...msgs) {
        msgs.unshift("--------------------------------");
        msgs.unshift(title);
        return msgs.map(msg => "| " + msg).join("\n")
    }


    /**
     * ### @Artic / Utils / Exceptions / Error
     * 
     * Quick method for dealing with Node callback
     * error without having to test it in every use
     * case to get coverage.
     * @param err 
     */
    export function error(err: Error) {
        if(err) { throw err }
    }

    /**
     * ### @Artic / Utils / Exceptions / ArticError
     * 
     * The factory for creating an Artic specific
     * error. It utilizes the template above for 
     * developer readability.
     * @param msgs 
     */
    export function articError(...msgs) {
        error(
            new Error(
                view("@Artic / Error", ...msgs)
            )
        )
    }

    /**
     * ### @Artic / Utils / Exceptions / ArticWarning
     * 
     * The factory for creating an Artic specific
     * warning. It utilizes the template above for 
     * developer readability.
     * @param msgs 
     */
    export function articWarning(...msgs: string[]) {
        console.warn(
            view("@Artic / Warning", ...msgs)
        );
    }
}
