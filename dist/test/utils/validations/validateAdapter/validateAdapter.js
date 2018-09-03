"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = require("../../../../src/utils/validations");
function validateAdapter() {
    validations_1.Validations.validateAdapter({
        adapter: {
            open: function (namespace) { return Promise.resolve(); },
            close: function (namespace) { return Promise.resolve(); },
            count: function (namespace) { return Promise.resolve(1); },
            has: function (namespace, key) { return Promise.resolve(true); },
            put: function (namespace, key, value) { return Promise.resolve(); },
            putMany: function (namespace, values) { return Promise.resolve(); },
            get: function (namespace, key) { return Promise.resolve(""); },
            getMany: function (namespace, keys) { return Promise.resolve([]); },
            remove: function (namespace, key) { return Promise.resolve(); },
            removeMany: function (namespace, keys) { return Promise.resolve(); },
            all: function (namespace) { return Promise.resolve([]); },
            stream: function (namespace, handler) { return Promise.resolve(); },
            emptyNamespace: function (namespace) { return Promise.resolve(); },
            empty: function () { return Promise.resolve(); }
        }
    });
}
exports.validateAdapter = validateAdapter;
