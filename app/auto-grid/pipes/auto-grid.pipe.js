"use strict";
/**
 * Created by asalaria on 10/15/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var core_1 = require("@angular/core");
var GridPipe = /** @class */ (function () {
    function GridPipe() {
        this.omitFn = function (value, key) {
            return value === '';
        };
        this.filter = function (allValues, filters) {
            var filter = _.omitBy(filters, this.omitFn);
            return _.filter(allValues, filter);
        };
        this.sort = function (sortables, sortings) {
            if (sortings) {
                return _.orderBy(sortables, [sortings.path], [sortings.getSortDescriptor()]);
            }
            return sortables;
        };
    }
    GridPipe.prototype.transform = function (allValues, selection) {
        var filtered = this.filter(allValues, selection.filters);
        var sorted = this.sort(filtered, selection.sortings);
        return sorted;
    };
    GridPipe = __decorate([
        core_1.Pipe({
            name: 'gridPipe',
            pure: false
        })
    ], GridPipe);
    return GridPipe;
}());
exports.GridPipe = GridPipe;
//# sourceMappingURL=auto-grid.pipe.js.map