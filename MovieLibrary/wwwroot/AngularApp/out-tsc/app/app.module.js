"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var movie_list_component_1 = require("./store/movie-list/movie-list.component");
var movie_cart_component_1 = require("./store/movie-cart/movie-cart.component");
var movie_shop_component_1 = require("./store/movie-shop/movie-shop.component");
var movie_checkout_component_1 = require("./store/movie-checkout/movie-checkout.component");
var movie_login_component_1 = require("./store/movie-login/movie-login.component");
var routes = [
    { path: "", component: movie_shop_component_1.MovieShopComponent },
    { path: "checkout", component: movie_checkout_component_1.MovieCheckoutComponent },
    { path: "login", component: movie_login_component_1.MovieLoginComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                movie_list_component_1.MovieListComponent,
                movie_cart_component_1.MovieCartComponent,
                movie_shop_component_1.MovieShopComponent,
                movie_checkout_component_1.MovieCheckoutComponent,
                movie_login_component_1.MovieLoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(routes, { useHash: true }),
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map