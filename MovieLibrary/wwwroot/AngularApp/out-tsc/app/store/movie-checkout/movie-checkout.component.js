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
var router_1 = require("@angular/router");
var data_service_1 = require("AngularApp/app/shared/data.service");
var MovieCheckoutComponent = /** @class */ (function () {
    function MovieCheckoutComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMsg = '';
    }
    MovieCheckoutComponent.prototype.ngOnInit = function () {
    };
    MovieCheckoutComponent.prototype.getImage = function (result) {
        if (result) {
            return "/assets/images/" + result.movieMovieName + ".png";
        }
        else
            return "/assets/images/notFound.png";
    };
    MovieCheckoutComponent.prototype.onCheckout = function () {
        var _this = this;
        this.dataService.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (error) { return _this.errorMsg = "Failed to save movie order!"; });
    };
    MovieCheckoutComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-checkout',
            templateUrl: './movie-checkout.component.html',
            styleUrls: ['./movie-checkout.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], MovieCheckoutComponent);
    return MovieCheckoutComponent;
}());
exports.MovieCheckoutComponent = MovieCheckoutComponent;
//# sourceMappingURL=movie-checkout.component.js.map