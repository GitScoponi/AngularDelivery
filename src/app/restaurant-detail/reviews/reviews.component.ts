import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../../Services/Restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  constructor(private restaurantService: RestaurantService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.reviews = this.restaurantService.getReviews(this.route.parent.snapshot.params['id']);
  }
  
}
