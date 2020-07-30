import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Restaurants', component: RestaurantsComponent},
    {path: 'Restaurants/:id', component: RestaurantDetailComponent,
    children:[
        {path: '', redirectTo: 'Menu', pathMatch: 'full'},
        {path: 'Menu', component: MenuComponent},
        {path: 'Reviews', component: ReviewsComponent}
    ]}
]
