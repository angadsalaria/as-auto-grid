"use strict";
/**
 * Created by asalaria on 10/22/16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var sorting_1 = require("./sorting");
var Selection = /** @class */ (function () {
    function Selection() {
        this.filters = {};
        this.sortings = new sorting_1.Sorting(null, null);
    }
    return Selection;
}());
exports.Selection = Selection;
//# sourceMappingURL=selection.js.map