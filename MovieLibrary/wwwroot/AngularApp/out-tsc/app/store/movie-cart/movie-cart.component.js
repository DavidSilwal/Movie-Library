"use strict";
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
var core_1 = require("@angular/core");
var data_service_1 = require("AngularApp/app/shared/data.service");
var router_1 = require("@angular/router");
var MovieCartComponent = /** @class */ (function () {
    function MovieCartComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    MovieCartComponent.prototype.ngOnInit = function () {
    };
    MovieCartComponent.prototype.onChekout = function () {
        //User is logged in or not
        if (this.dataService.needLogin) {
            //Redirect to login page
            this.router.navigate(['login']);
        }
        else {
            //to checkout page
            this.router.navigate(['checkout']);
        }
    };
    MovieCartComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-cart',
            templateUrl: './movie-cart.component.html',
            styleUrls: ['./movie-cart.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], MovieCartComponent);
    return MovieCartComponent;
}());
exports.MovieCartComponent = MovieCartComponent;
//# sourceMappingURL=movie-cart.component.js.map