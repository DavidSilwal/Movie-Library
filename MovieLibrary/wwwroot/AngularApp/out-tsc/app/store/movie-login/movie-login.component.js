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
var MovieLoginComponent = /** @class */ (function () {
    function MovieLoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMsg = "";
        this.userDetails = {
            username: '',
            password: ''
        };
    }
    MovieLoginComponent.prototype.ngOnInit = function () {
    };
    MovieLoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.dataService.login(this.userDetails)
            .subscribe(function (success) {
            if (success) {
                if (_this.dataService.movieOrder.items.length > 0) {
                    _this.router.navigate(['checkout']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        }, function (error) {
            _this.errorMsg = "Failed to login!";
        });
    };
    MovieLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-login',
            templateUrl: './movie-login.component.html',
            styleUrls: ['./movie-login.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], MovieLoginComponent);
    return MovieLoginComponent;
}());
exports.MovieLoginComponent = MovieLoginComponent;
//# sourceMappingURL=movie-login.component.js.map