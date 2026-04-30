"use strict";
/**
 * Created by asalaria on 10/9/2016.
 *
 * test plunkr: //https://plnkr.co/edit/KudLYPUww4r286iPzGTN?p=preview
 * https://plnkr.co/edit/U3nzaesTk8X1Z9wzSmJx?p=preview
 * https://plnkr.co/edit/dwwaJhswZLaOk2TFBbVz?p=preview
 * viewchildren: https://plnkr.co/edit/LzkaD7v4NTB8nREMxHqi?p=preview
 * https://www.youtube.com/watch?v=4YmnbGoh49U&feature=youtu.be
 * http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var core_1 = require("@angular/core");
var app_auto_grid_1 = require("./app.auto-grid");
var AutoGridEnable = /** @class */ (function () {
    function AutoGridEnable(el, renderer, parent) {
        this.isFilterActive = function () {
            return this.selectEnabled;
        };
        this.getGridSorting = function () {
            return this.parent.getCurrentSorting();
        };
        this.getFilterItems = function () {
            return this.parent.getFilterOptions(this.column);
        };
        this.onFilterChange = function (filterSelection) {
            this.parent.setFilterProperty(this.column, filterSelection);
        };
        this.resetFilter = function () {
            this.filterSelection = null;
            this.parent.unsetFilterProperty(this.column);
        };
        this.onSortChange = function () {
            if (this.sortEnabled) {
                this.parent.setSortColumn(this.column, this.isAscending);
            }
        };
        this.isAscending = function () {
            var sortings = this.getGridSorting();
            if (sortings.path != this.column) {
                return null;
            }
            return sortings.isAscending === false && sortings.path == this.column;
        };
        this.parent = parent;
    }
    AutoGridEnable.prototype.ngOnInit = function () {
        this.selectEnabled = !_.isUndefined(this.selectEnabled);
        this.sortEnabled = !_.isUndefined(this.sortEnabled);
    };
    __decorate([
        core_1.Input('auto-grid-enable'),
        __metadata("design:type", String)
    ], AutoGridEnable.prototype, "column", void 0);
    __decorate([
        core_1.Input('sort-enabled'),
        __metadata("design:type", Boolean)
    ], AutoGridEnable.prototype, "sortEnabled", void 0);
    __decorate([
        core_1.Input('select-enabled'),
        __metadata("design:type", Boolean)
    ], AutoGridEnable.prototype, "selectEnabled", void 0);
    AutoGridEnable = __decorate([
        core_1.Component({
            selector: 'th[auto-grid-enable]',
            templateUrl: 'app/auto-grid/templates/auto-grid-enable.html',
            styleUrls: ['app/auto-grid/styles/auto-grid-styles.css']
        }),
        __param(2, core_1.Inject(core_1.forwardRef(function () { return app_auto_grid_1.AutoGrid; }))),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, app_auto_grid_1.AutoGrid])
    ], AutoGridEnable);
    return AutoGridEnable;
}());
exports.AutoGridEnable = AutoGridEnable;
//# sourceMappingURL=app.auto-grid-enable.js.map