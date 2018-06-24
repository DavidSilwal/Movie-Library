import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from "rxjs";
import { Movie } from '../shared/movie';
import { MovieOrder } from '../shared/movieOrder';
import { MovieItem } from '../shared/movieItem';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    public movieItems: Movie[] = [];
    public movieOrder: MovieOrder = new MovieOrder();
    private token: string = '';
    private tokenExp: Date;
    constructor(private http: HttpClient) { }

    loadMovies(): Observable<boolean> {
        return this.http.get("/api/movies")
            .pipe(
            map((data: any[]) => {
                this.movieItems = data;
                return true;
            }), catchError(error => {
                return throwError('Unable to fetch record!');
            }));
    }

    public get needLogin(): boolean {
        return this.token.length === 0 || this.tokenExp > new Date();
    }

    login(loginDetails): Observable<boolean> {
        return this.http.post('/account/CreateToken/', loginDetails)
            .pipe(
            map((data: any) => {
                this.token = data.token;
                this.tokenExp = data.expiration;
                return true;
            }));
    }

    checkout() {
        if (!this.movieOrder.orderNumber) {
            this.movieOrder.orderNumber = this.movieOrder.orderDateTime.getDate().toString() +
                this.movieOrder.orderDateTime.getMilliseconds().toString();
        }
        return this.http.post('/api/Movieorders', this.movieOrder,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
            })
            .pipe(
            map(res => {
                this.movieOrder = new MovieOrder();
                return true;
            }));
    }

    addMovie(newMovie: Movie) {

        let movieItem: MovieItem = this.movieOrder.items.find(i => i.movieId === newMovie.id);
        if (movieItem) {
            movieItem.quantity++;
        }
        else {
            movieItem = new MovieItem();
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
    }
}
