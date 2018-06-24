import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private isUserLoggedin;
    private username;

    constructor() {
        this.isUserLoggedin = false;
    }

    setUserLoggedIn() {
        this.isUserLoggedin = true;
    }

    isUserLoggedIn() {
        return this.isUserLoggedin;
    }
}
