"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RootComponent = /** @class */ (function () {
    function RootComponent() {
        this.message = "Hello!";
        this.gridData = [
            { id: 1, fname: 'Angad', lname: 'Salaria' },
            { id: 2, fname: 'John', lname: 'Doe' },
            { id: 3, fname: 'Sam', lname: 'Adams' },
            { id: 4, fname: 'John', lname: 'Adams' },
            { id: 5, fname: 'Edward', lname: 'Miller' },
            { id: 6, fname: 'Lawrence', lname: 'Bross' }
        ];
    }
    RootComponent.prototype.onNotify = function (message) {
        alert(message);
    };
    RootComponent = __decorate([
        core_1.Component({
            selector: 'root-app',
            templateUrl: 'app/templates/root-app.html',
        })
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=app.component.js.map