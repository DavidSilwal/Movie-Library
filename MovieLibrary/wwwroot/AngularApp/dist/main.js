(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./AngularApp/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./AngularApp/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./AngularApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./AngularApp/app/app.component.css":
/*!******************************************!*\
  !*** ./AngularApp/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./AngularApp/app/app.component.html":
/*!*******************************************!*\
  !*** ./AngularApp/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./AngularApp/app/app.component.ts":
/*!*****************************************!*\
  !*** ./AngularApp/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Movie Library';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./AngularApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./AngularApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./AngularApp/app/app.module.ts":
/*!**************************************!*\
  !*** ./AngularApp/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./AngularApp/app/app.component.ts");
/* harmony import */ var _store_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/movie-list/movie-list.component */ "./AngularApp/app/store/movie-list/movie-list.component.ts");
/* harmony import */ var _store_movie_cart_movie_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/movie-cart/movie-cart.component */ "./AngularApp/app/store/movie-cart/movie-cart.component.ts");
/* harmony import */ var _store_movie_shop_movie_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/movie-shop/movie-shop.component */ "./AngularApp/app/store/movie-shop/movie-shop.component.ts");
/* harmony import */ var _store_movie_checkout_movie_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/movie-checkout/movie-checkout.component */ "./AngularApp/app/store/movie-checkout/movie-checkout.component.ts");
/* harmony import */ var _store_movie_login_movie_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/movie-login/movie-login.component */ "./AngularApp/app/store/movie-login/movie-login.component.ts");
/* harmony import */ var AngularApp_app_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! AngularApp/app/shared/auth.guard */ "./AngularApp/app/shared/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: "", component: _store_movie_shop_movie_shop_component__WEBPACK_IMPORTED_MODULE_8__["MovieShopComponent"] },
    { path: "checkout", component: _store_movie_checkout_movie_checkout_component__WEBPACK_IMPORTED_MODULE_9__["MovieCheckoutComponent"], canActivate: [AngularApp_app_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "login", component: _store_movie_login_movie_login_component__WEBPACK_IMPORTED_MODULE_10__["MovieLoginComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _store_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"],
                _store_movie_cart_movie_cart_component__WEBPACK_IMPORTED_MODULE_7__["MovieCartComponent"],
                _store_movie_shop_movie_shop_component__WEBPACK_IMPORTED_MODULE_8__["MovieShopComponent"],
                _store_movie_checkout_movie_checkout_component__WEBPACK_IMPORTED_MODULE_9__["MovieCheckoutComponent"],
                _store_movie_login_movie_login_component__WEBPACK_IMPORTED_MODULE_10__["MovieLoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./AngularApp/app/shared/auth.guard.ts":
/*!*********************************************!*\
  !*** ./AngularApp/app/shared/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var AngularApp_app_shared_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AngularApp/app/shared/login.service */ "./AngularApp/app/shared/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService) {
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.loginService.isUserLoggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularApp_app_shared_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./AngularApp/app/shared/data.service.ts":
/*!***********************************************!*\
  !*** ./AngularApp/app/shared/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_movieOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/movieOrder */ "./AngularApp/app/shared/movieOrder.ts");
/* harmony import */ var _shared_movieItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/movieItem */ "./AngularApp/app/shared/movieItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.movieItems = [];
        this.movieOrder = new _shared_movieOrder__WEBPACK_IMPORTED_MODULE_4__["MovieOrder"]();
        this.token = '';
    }
    DataService.prototype.loadMovies = function () {
        var _this = this;
        return this.http.get("/api/movies")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.movieItems = data;
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Unable to fetch record!');
        }));
    };
    Object.defineProperty(DataService.prototype, "needLogin", {
        get: function () {
            return this.token.length === 0 || this.tokenExp > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (loginDetails) {
        var _this = this;
        return this.http.post('/account/CreateToken/', loginDetails)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.token = data.token;
            _this.tokenExp = data.expiration;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.movieOrder.orderNumber) {
            this.movieOrder.orderNumber = this.movieOrder.orderDateTime.getDate().toString() +
                this.movieOrder.orderDateTime.getMilliseconds().toString();
        }
        return this.http.post('/api/Movieorders', this.movieOrder, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.token)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.movieOrder = new _shared_movieOrder__WEBPACK_IMPORTED_MODULE_4__["MovieOrder"]();
            return true;
        }));
    };
    DataService.prototype.addMovie = function (newMovie) {
        var movieItem = this.movieOrder.items.find(function (i) { return i.movieId === newMovie.id; });
        if (movieItem) {
            movieItem.quantity++;
        }
        else {
            movieItem = new _shared_movieItem__WEBPACK_IMPORTED_MODULE_5__["MovieItem"]();
            movieItem.movieId = newMovie.id;
            movieItem.movieActorName = newMovie.actorName;
            movieItem.movieDirectorName = newMovie.directorName;
            movieItem.movieGenre = newMovie.genre;
            movieItem.movieMovieName = newMovie.movieName;
            movieItem.movieReleaseDate = newMovie.releaseDate;
            movieItem.price = newMovie.price;
            movieItem.quantity = 1;
            this.movieOrder.items.push(movieItem);
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./AngularApp/app/shared/login.service.ts":
/*!************************************************!*\
  !*** ./AngularApp/app/shared/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = /** @class */ (function () {
    function LoginService() {
        this.isUserLoggedin = false;
    }
    LoginService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedin = true;
    };
    LoginService.prototype.isUserLoggedIn = function () {
        return this.isUserLoggedin;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./AngularApp/app/shared/movieItem.ts":
/*!********************************************!*\
  !*** ./AngularApp/app/shared/movieItem.ts ***!
  \********************************************/
/*! exports provided: MovieItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItem", function() { return MovieItem; });
var MovieItem = /** @class */ (function () {
    function MovieItem() {
    }
    return MovieItem;
}());



/***/ }),

/***/ "./AngularApp/app/shared/movieOrder.ts":
/*!*********************************************!*\
  !*** ./AngularApp/app/shared/movieOrder.ts ***!
  \*********************************************/
/*! exports provided: MovieOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieOrder", function() { return MovieOrder; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var MovieOrder = /** @class */ (function () {
    function MovieOrder() {
        this.orderDateTime = new Date();
        this.items = new Array();
    }
    Object.defineProperty(MovieOrder.prototype, "total", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, function (i) { return i.price * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return MovieOrder;
}());



/***/ }),

/***/ "./AngularApp/app/store/movie-cart/movie-cart.component.css":
/*!******************************************************************!*\
  !*** ./AngularApp/app/store/movie-cart/movie-cart.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./AngularApp/app/store/movie-cart/movie-cart.component.html":
/*!*******************************************************************!*\
  !*** ./AngularApp/app/store/movie-cart/movie-cart.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Movie Cart</h3>\r\nIndividual Movies Count: {{dataService.movieOrder.items.length}}\r\n<br />\r\nTotal: {{dataService.movieOrder.total | currency:\"USD\":true }}\r\n\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Movie</td>\r\n            <td>Director Name</td>\r\n            <td>Release Date</td>\r\n            <td>Unit Price</td>\r\n            <td>Quantity</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let m of dataService.movieOrder.items\">\r\n            <td>{{m.movieMovieName}}</td>\r\n            <td>{{m.movieDirectorName}}</td>\r\n            <td>{{m.movieReleaseDate}}</td>\r\n            <td>{{m.price | currency:\"USD\":true}}</td>\r\n            <td>{{m.quantity}}</td>\r\n            <td>{{(m.price * m.quantity) | currency:\"USD\":true}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<a routerLink=\"checkout\" class=\"btn btn-success\" *ngIf=\"dataService.movieOrder.items.length > 0\" (click)=\"onChekout()\"> Checkout</a>"

/***/ }),

/***/ "./AngularApp/app/store/movie-cart/movie-cart.component.ts":
/*!*****************************************************************!*\
  !*** ./AngularApp/app/store/movie-cart/movie-cart.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCartComponent", function() { return MovieCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AngularApp/app/shared/data.service */ "./AngularApp/app/shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-cart',
            template: __webpack_require__(/*! ./movie-cart.component.html */ "./AngularApp/app/store/movie-cart/movie-cart.component.html"),
            styles: [__webpack_require__(/*! ./movie-cart.component.css */ "./AngularApp/app/store/movie-cart/movie-cart.component.css")]
        }),
        __metadata("design:paramtypes", [AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MovieCartComponent);
    return MovieCartComponent;
}());



/***/ }),

/***/ "./AngularApp/app/store/movie-checkout/movie-checkout.component.css":
/*!**************************************************************************!*\
  !*** ./AngularApp/app/store/movie-checkout/movie-checkout.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumb {\r\n    max-width: 100px;\r\n}\r\n"

/***/ }),

/***/ "./AngularApp/app/store/movie-checkout/movie-checkout.component.html":
/*!***************************************************************************!*\
  !*** ./AngularApp/app/store/movie-checkout/movie-checkout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\r\n    <h3>Order Confirmation</h3>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <tr *ngFor=\"let m of dataService.movieOrder.items\">\r\n            <td>\r\n                <a href=\"#\" target=\"_blank\"><img [src]=getImage(m) [alt]=\"m.movieMovieName\" class=\"img-thumbnail img-thumb\"></a>\r\n            </td>\r\n            <td>{{m.movieMovieName}}</td>\r\n            <td>{{m.movieDirectorName}}</td>\r\n            <td>{{m.movieReleaseDate}}</td>\r\n            <td>{{m.price | currency:\"USD\":true}}</td>\r\n            <td>{{m.quantity}}</td>\r\n            <td>{{(m.price * m.quantity) | currency:\"USD\":true}}</td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n            <tr>\r\n                <td class=\"text-right\">Total:</td>\r\n                <td class=\"text-right\">{{ dataService.movieOrder.total|currency:'USD':true }}</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Order</button>\r\n        <a routerLink=\"/\" class=\"btn btn-danger\">Cancel</a>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./AngularApp/app/store/movie-checkout/movie-checkout.component.ts":
/*!*************************************************************************!*\
  !*** ./AngularApp/app/store/movie-checkout/movie-checkout.component.ts ***!
  \*************************************************************************/
/*! exports provided: MovieCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCheckoutComponent", function() { return MovieCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! AngularApp/app/shared/data.service */ "./AngularApp/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-checkout',
            template: __webpack_require__(/*! ./movie-checkout.component.html */ "./AngularApp/app/store/movie-checkout/movie-checkout.component.html"),
            styles: [__webpack_require__(/*! ./movie-checkout.component.css */ "./AngularApp/app/store/movie-checkout/movie-checkout.component.css")]
        }),
        __metadata("design:paramtypes", [AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MovieCheckoutComponent);
    return MovieCheckoutComponent;
}());



/***/ }),

/***/ "./AngularApp/app/store/movie-list/movie-list.component.css":
/*!******************************************************************!*\
  !*** ./AngularApp/app/store/movie-list/movie-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./AngularApp/app/store/movie-list/movie-list.component.html":
/*!*******************************************************************!*\
  !*** ./AngularApp/app/store/movie-list/movie-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngFor=\"let m of movieItems\">\r\n        <div class=\"col-md-6 col-sm-6 highlight\">\r\n            <div class=\"well well-lg\">\r\n                <div class=\"h-body text-center\">\r\n                    <button class=\"btn btn-success\" (click)=\"addMovie(m)\"> Buy</button>\r\n                </div>\r\n                <div class=\"h-caption\">\r\n                    <h4><i class=\"fa fa-video-camera fa-5\"></i>{{m.movieName}}</h4>\r\n                </div>\r\n                <div class=\"h-body text-center\">\r\n                    <p>\r\n                        <a href=\"#\" target=\"_blank\"><img [src]=getImage(m) [alt]=\"m.movieName\" class=\"img-rounded\" width=\"600\" height=\"300\"></a>\r\n                    </p>\r\n                    <p>Director:- {{m.directorName}}</p>\r\n                    <p>Actor:- {{m.actorName}}</p>\r\n                    <p>Genre:- {{m.genre}}</p>\r\n                    <p>Release Date:- {{m.releaseDate}}</p>\r\n                    <p>Unit Price:- {{m.price | currency:'USD':true}}</p>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./AngularApp/app/store/movie-list/movie-list.component.ts":
/*!*****************************************************************!*\
  !*** ./AngularApp/app/store/movie-list/movie-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AngularApp/app/shared/data.service */ "./AngularApp/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(dataService) {
        this.dataService = dataService;
        this.movieItems = [];
        // this.movieItems = dataService.movieItems;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.loadMovies()
            .subscribe(function (success) {
            if (success) {
                _this.movieItems = _this.dataService.movieItems;
                console.log('Movie Items:-', _this.movieItems);
            }
        });
    };
    MovieListComponent.prototype.getImage = function (result) {
        if (result) {
            return "/assets/images/" + result.movieName + ".png";
        }
        else
            return "/assets/images/notFound.png";
    };
    MovieListComponent.prototype.addMovie = function (m) {
        this.dataService.addMovie(m);
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./AngularApp/app/store/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./AngularApp/app/store/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./AngularApp/app/store/movie-login/movie-login.component.css":
/*!********************************************************************!*\
  !*** ./AngularApp/app/store/movie-login/movie-login.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./AngularApp/app/store/movie-login/movie-login.component.html":
/*!*********************************************************************!*\
  !*** ./AngularApp/app/store/movie-login/movie-login.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\r\n        <form (submit)=\"onLogin()\" #form=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"userDetails.username\" #username=\"ngModel\" required/>\r\n                <span *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required</span>\r\n              </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userDetails.password\" #password=\"ngModel\" required />\r\n                <span *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"form.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./AngularApp/app/store/movie-login/movie-login.component.ts":
/*!*******************************************************************!*\
  !*** ./AngularApp/app/store/movie-login/movie-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieLoginComponent", function() { return MovieLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AngularApp/app/shared/data.service */ "./AngularApp/app/shared/data.service.ts");
/* harmony import */ var AngularApp_app_shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! AngularApp/app/shared/login.service */ "./AngularApp/app/shared/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieLoginComponent = /** @class */ (function () {
    function MovieLoginComponent(dataService, router, loginService) {
        this.dataService = dataService;
        this.router = router;
        this.loginService = loginService;
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
                _this.loginService.setUserLoggedIn();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-login',
            template: __webpack_require__(/*! ./movie-login.component.html */ "./AngularApp/app/store/movie-login/movie-login.component.html"),
            styles: [__webpack_require__(/*! ./movie-login.component.css */ "./AngularApp/app/store/movie-login/movie-login.component.css")]
        }),
        __metadata("design:paramtypes", [AngularApp_app_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], AngularApp_app_shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MovieLoginComponent);
    return MovieLoginComponent;
}());



/***/ }),

/***/ "./AngularApp/app/store/movie-shop/movie-shop.component.css":
/*!******************************************************************!*\
  !*** ./AngularApp/app/store/movie-shop/movie-shop.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./AngularApp/app/store/movie-shop/movie-shop.component.html":
/*!*******************************************************************!*\
  !*** ./AngularApp/app/store/movie-shop/movie-shop.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h3>{{title}}</h3>\r\n        <app-movie-list></app-movie-list>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"well well-sm\">\r\n            <app-movie-cart></app-movie-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./AngularApp/app/store/movie-shop/movie-shop.component.ts":
/*!*****************************************************************!*\
  !*** ./AngularApp/app/store/movie-shop/movie-shop.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieShopComponent", function() { return MovieShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieShopComponent = /** @class */ (function () {
    function MovieShopComponent() {
    }
    MovieShopComponent.prototype.ngOnInit = function () {
    };
    MovieShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-shop',
            template: __webpack_require__(/*! ./movie-shop.component.html */ "./AngularApp/app/store/movie-shop/movie-shop.component.html"),
            styles: [__webpack_require__(/*! ./movie-shop.component.css */ "./AngularApp/app/store/movie-shop/movie-shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieShopComponent);
    return MovieShopComponent;
}());



/***/ }),

/***/ "./AngularApp/environments/environment.ts":
/*!************************************************!*\
  !*** ./AngularApp/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./AngularApp/main.ts":
/*!****************************!*\
  !*** ./AngularApp/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./AngularApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./AngularApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./AngularApp/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dell\MyExperiments\MovieLibrary\MovieLibrary\AngularApp\main.ts */"./AngularApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map