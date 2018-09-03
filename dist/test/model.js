"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var dev_adapter_1 = require("../src/adapters/dev.adapter");
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Article;
}(index_1.Entity));
exports.Article = Article;
var context = {
    Article: Article
};
var mainAdapter = new dev_adapter_1.DevAdapter();
mainAdapter.quiet = true;
var backupAdapter = new dev_adapter_1.DevAdapter();
backupAdapter.quiet = true;
var copyAdapter = new dev_adapter_1.DevAdapter();
copyAdapter.quiet = true;
exports.mainDB = index_1.Database.vMake("main", {
    adapter: mainAdapter,
    encryptionKey: process.env.ENCRYPTION_KEY,
    context: context
});
exports.backupDB = index_1.Database.vMake("backup", {
    adapter: backupAdapter,
    encryptionKey: null,
    context: context
});
exports.copyDB = index_1.Database.vMake("copy.db", {
    adapter: copyAdapter,
    encryptionKey: null,
    context: context
});
exports.allDB = index_1.Database.vParallel(exports.mainDB, exports.backupDB);
