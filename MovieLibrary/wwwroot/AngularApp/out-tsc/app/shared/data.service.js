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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var movieOrder_1 = require("../shared/movieOrder");
var movieItem_1 = require("../shared/movieItem");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.movieItems = [];
        this.movieOrder = new movieOrder_1.MovieOrder();
        this.token = '';
    }
    DataService.prototype.loadMovies = function () {
        var _this = this;
        return this.http.get("/api/movies")
            .pipe(operators_1.map(function (data) {
            _this.movieItems = data;
            return true;
        }), operators_1.catchError(function (error) {
            return rxjs_1.throwError('Unable to fetch record!');
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
            .pipe(operators_1.map(function (data) {
            _this.token = data.token;
            _this.tokenExp = data.expiration;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        if (!this.movieOrder.orderNumber) {
            this.movieOrder.orderNumber = this.movieOrder.orderDateTime.getDate().toString() +
                this.movieOrder.orderDateTime.getMilliseconds().toString();
        }
        return this.http.post('/api/Movieorders', this.movieOrder, {
            headers: new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.token)
        })
            .pipe(operators_1.map(function (res) {
            return true;
        }));
    };
    DataService.prototype.addMovie = function (newMovie) {
        var movieItem = this.movieOrder.items.find(function (i) { return i.movieId === newMovie.id; });
        if (movieItem) {
            movieItem.quantity++;
        }
        else {
            movieItem = new movieItem_1.MovieItem();
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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map