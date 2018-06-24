import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'AngularApp/app/shared/data.service';

@Component({
  selector: 'app-movie-checkout',
  templateUrl: './movie-checkout.component.html',
  styleUrls: ['./movie-checkout.component.css']
})
export class MovieCheckoutComponent implements OnInit {

    errorMsg:string = '';
    constructor(private dataService: DataService, private router: Router) {

    }

  ngOnInit() {
  }

   getImage(result) {
        if (result) {
            return "/assets/images/" + result.movieMovieName + ".png";
        } else return "/assets/images/notFound.png";
   }

    onCheckout() {
        this.dataService.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, error => this.errorMsg = "Failed to save movie order!")
            
    }
    
}
