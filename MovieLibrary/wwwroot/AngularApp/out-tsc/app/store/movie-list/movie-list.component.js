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
        core_1.Component({
            selector: 'app-movie-list',
            templateUrl: './movie-list.component.html',
            styleUrls: ['./movie-list.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map