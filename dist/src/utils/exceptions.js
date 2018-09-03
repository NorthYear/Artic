"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ### @Artic / Utils / Exceptions
 *
 * Module for handle errors/exceptions
 */
var Exceptions;
(function (Exceptions) {
    /**
     * ### @Artic / Utils / Exceptions / View
     *
     * Template for a nice user readable exception
     * @param title
     * @param msgs
     */
    function view(title) {
        var msgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msgs[_i - 1] = arguments[_i];
        }
        msgs.unshift("--------------------------------");
        msgs.unshift(title);
        return msgs.map(function (msg) { return "| " + msg; }).join("\n");
    }
    Exceptions.view = view;
    /**
     * ### @Artic / Utils / Exceptions / Error
     *
     * Quick method for dealing with Node callback
     * error without having to test it in every use
     * case to get coverage.
     * @param err
     */
    function error(err) {
        if (err) {
            throw err;
        }
    }
    Exceptions.error = error;
    /**
     * ### @Artic / Utils / Exceptions / ArticError
     *
     * The factory for creating an Artic specific
     * error. It utilizes the template above for
     * developer readability.
     * @param msgs
     */
    function articError() {
        var msgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msgs[_i] = arguments[_i];
        }
        error(new Error(view.apply(void 0, ["@Artic / Error"].concat(msgs))));
    }
    Exceptions.articError = articError;
    /**
     * ### @Artic / Utils / Exceptions / ArticWarning
     *
     * The factory for creating an Artic specific
     * warning. It utilizes the template above for
     * developer readability.
     * @param msgs
     */
    function articWarning() {
        var msgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msgs[_i] = arguments[_i];
        }
        console.warn(view.apply(void 0, ["@Artic / Warning"].concat(msgs)));
    }
    Exceptions.articWarning = articWarning;
})(Exceptions = exports.Exceptions || (exports.Exceptions = {}));
