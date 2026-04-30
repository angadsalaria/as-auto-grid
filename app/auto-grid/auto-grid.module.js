"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_auto_grid_enable_1 = require("./app.auto-grid-enable");
var app_auto_grid_1 = require("./app.auto-grid");
var auto_grid_pipe_1 = require("./pipes/auto-grid.pipe");
var AutoGridModule = /** @class */ (function () {
    function AutoGridModule() {
    }
    AutoGridModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_auto_grid_1.AutoGrid, app_auto_grid_enable_1.AutoGridEnable, auto_grid_pipe_1.GridPipe],
            providers: [],
            bootstrap: [],
            exports: [app_auto_grid_1.AutoGrid, app_auto_grid_enable_1.AutoGridEnable, auto_grid_pipe_1.GridPipe]
        })
    ], AutoGridModule);
    return AutoGridModule;
}());
exports.AutoGridModule = AutoGridModule;
//# sourceMappingURL=auto-grid.module.js.map