"use strict";
/**
 * Created by asalaria on 10/5/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var core_1 = require("@angular/core");
var selection_1 = require("./classes/selection");
var AutoGrid = /** @class */ (function () {
    function AutoGrid() {
        this.selections = new selection_1.Selection();
        this.getFilterOptions = function (path) {
            var sorter = function (item) {
                return item;
            };
            var opts = _.sortBy(_.uniq(_.map(this.data, path)), sorter);
            return opts;
        };
        this.setFilterProperty = function (path, value) {
            _.set(this.selections.filters, path, value);
        };
        this.unsetFilterProperty = function (path) {
            _.unset(this.selections.filters, path);
        };
        this.setSortColumn = function (path) {
            this.selections.sortings.update(path);
        };
        this.getCurrentSorting = function () {
            return this.selections.sortings;
        };
        this.getFilters = function () {
            return this.filters;
        };
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AutoGrid.prototype, "data", void 0);
    AutoGrid = __decorate([
        core_1.Component({
            selector: 'auto-grid',
            templateUrl: 'app/auto-grid/templates/auto-grid.html'
        }),
        core_1.Injectable()
    ], AutoGrid);
    return AutoGrid;
}());
exports.AutoGrid = AutoGrid;
//# sourceMappingURL=app.auto-grid.js.map