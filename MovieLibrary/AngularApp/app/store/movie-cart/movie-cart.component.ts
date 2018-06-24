import { Component, OnInit } from '@angular/core';
import { DataService } from 'AngularApp/app/shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.css']
})
export class MovieCartComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router) {
        
    }
  ngOnInit() {
  }

    onChekout() {
        //User is logged in or not
        if (this.dataService.needLogin) {
            //Redirect to login page
            this.router.navigate(['login']);
        } else {
            //to checkout page
            this.router.navigate(['checkout']);
        }
    }

}
