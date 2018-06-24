"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var MovieOrder = /** @class */ (function () {
    function MovieOrder() {
        this.orderDateTime = new Date();
        this.items = new Array();
    }
    Object.defineProperty(MovieOrder.prototype, "total", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.price * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return MovieOrder;
}());
exports.MovieOrder = MovieOrder;
//# sourceMappingURL=movieOrder.js.map