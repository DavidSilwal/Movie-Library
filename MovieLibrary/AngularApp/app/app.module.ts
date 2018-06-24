import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './store/movie-list/movie-list.component';
import { MovieCartComponent } from './store/movie-cart/movie-cart.component';

import { MovieShopComponent } from './store/movie-shop/movie-shop.component';
import { MovieCheckoutComponent } from './store/movie-checkout/movie-checkout.component';
import { MovieLoginComponent } from './store/movie-login/movie-login.component';
import { AuthGuard } from 'AngularApp/app/shared/auth.guard';

let routes = [
    { path: "", component: MovieShopComponent },
    { path: "checkout", component: MovieCheckoutComponent, canActivate: [AuthGuard] },
    { path: "login", component: MovieLoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCartComponent,
    MovieShopComponent,
    MovieCheckoutComponent,
    MovieLoginComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes, { useHash: true }),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
