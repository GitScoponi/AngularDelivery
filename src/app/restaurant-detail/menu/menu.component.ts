import { IMenuItem } from './../../../Model/MenuItem.Model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'Services/Restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItens:IMenuItem[];
  constructor(private restaurantService:RestaurantService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.restaurantService.getMenu(this.route.parent.snapshot.params['id'])
    .subscribe(s => this.menuItens = s);
  }
  addMenuItem(item:IMenuItem){
    console.log(item);
  }
} 
