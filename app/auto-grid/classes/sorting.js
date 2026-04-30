"use strict";
/**
 * Created by asalaria on 10/22/16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Sorting = /** @class */ (function () {
    function Sorting(path, isAscending) {
        this.path = path;
        this.isAscending = isAscending;
        //pertains to identifiers for lodash
        this.getSortDescriptor = function () {
            return this.isAscending ? 'asc' : 'desc';
        };
    }
    Sorting.prototype.update = function (_path) {
        this.path = _path;
        this.isAscending = !this.isAscending;
    };
    return Sorting;
}());
exports.Sorting = Sorting;
//# sourceMappingURL=sorting.js.map