import { RestaurantService } from './../../Services/Restaurant.service';
import { Component, OnInit } from '@angular/core';
import {IRestaurant} from 'Model/Restaurant.Model'
@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: IRestaurant[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
     this.restaurantService.getAll().subscribe(
      sucess => {this.restaurants = sucess;
      },
      error => {console.error(error.Message);
      }
      );
  }

}
