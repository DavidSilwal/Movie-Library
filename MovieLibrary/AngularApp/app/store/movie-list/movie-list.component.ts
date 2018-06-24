import { Component, OnInit } from '@angular/core';
import { DataService } from 'AngularApp/app/shared/data.service';
import { Movie } from '../../shared/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    public movieItems: Movie[] = [];
    constructor(private dataService: DataService) {
       // this.movieItems = dataService.movieItems;
    }

    ngOnInit() {
        this.dataService.loadMovies()
            .subscribe(success => {
                if (success) {
                    this.movieItems = this.dataService.movieItems;
                    console.log('Movie Items:-', this.movieItems);
                }
            });
    }

    getImage(result) {
        if (result) {
          return "/assets/images/" + result.movieName + ".png";
        } else return "/assets/images/notFound.png";
    }

    addMovie(m: Movie) {
        this.dataService.addMovie(m);
    }
    
 }
