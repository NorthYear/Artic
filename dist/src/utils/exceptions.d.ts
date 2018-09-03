/**
 * ### @Artic / Utils / Exceptions
 *
 * Module for handle errors/exceptions
 */
export declare namespace Exceptions {
    /**
     * ### @Artic / Utils / Exceptions / View
     *
     * Template for a nice user readable exception
     * @param title
     * @param msgs
     */
    function view(title: string, ...msgs: any[]): string;
    /**
     * ### @Artic / Utils / Exceptions / Error
     *
     * Quick method for dealing with Node callback
     * error without having to test it in every use
     * case to get coverage.
     * @param err
     */
    function error(err: Error): void;
    /**
     * ### @Artic / Utils / Exceptions / ArticError
     *
     * The factory for creating an Artic specific
     * error. It utilizes the template above for
     * developer readability.
     * @param msgs
     */
    function articError(...msgs: any[]): void;
    /**
     * ### @Artic / Utils / Exceptions / ArticWarning
     *
     * The factory for creating an Artic specific
     * warning. It utilizes the template above for
     * developer readability.
     * @param msgs
     */
    function articWarning(...msgs: string[]): void;
}
