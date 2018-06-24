import { Component, OnInit } from '@angular/core';
import { DataService } from 'AngularApp/app/shared/data.service';
import { LoginService } from 'AngularApp/app/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-login',
  templateUrl: './movie-login.component.html',
  styleUrls: ['./movie-login.component.css']
})
export class MovieLoginComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router, private loginService: LoginService ) { }

    errorMsg:string = "";
    userDetails = {
        username: '',
        password: ''
    }

  ngOnInit() {
  }

    onLogin() {
        this.dataService.login(this.userDetails)
            .subscribe(success => {
                if (success) {
                    this.loginService.setUserLoggedIn();
                    if (this.dataService.movieOrder.items.length > 0) {
                        this.router.navigate(['checkout']);
                    } else {
                        this.router.navigate(['/']);
                    }
                }
                },
                error => {
                    this.errorMsg = "Failed to login!";
                });
    }

}
