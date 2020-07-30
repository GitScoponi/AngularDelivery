import { RestaurantService } from './../../Services/Restaurant.service';
import { Component, OnInit } from '@angular/core';
import { IRestaurant } from 'Model/Restaurant.Model';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: IRestaurant;
  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.restaurantService.getById(this.route.snapshot.params['id'])
    .subscribe(ok => this.restaurant = ok);
  }

}
