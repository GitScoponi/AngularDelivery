import { ShoppingCartService } from './../Services/shoppingCart.service';
import { RestaurantService } from './../Services/Restaurant.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.route';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from '../app/restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      AboutComponent,
      RestaurantsComponent,
      RestaurantComponent,
      RestaurantDetailComponent,
      MenuComponent,
      MenuItemComponent,
      ShoppingCartComponent,
      ReviewsComponent
   ],
   imports: [
	 BrowserModule,
	 HttpModule,
	 RouterModule.forRoot(ROUTES)
	],
   providers: [
      RestaurantService,
      ShoppingCartService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
