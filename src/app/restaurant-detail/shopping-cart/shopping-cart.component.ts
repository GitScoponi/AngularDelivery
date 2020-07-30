import { ShoppingCartService } from './../../../Services/shoppingCart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  constructor(private shoppingCartService: ShoppingCartService) { }
  
  ngOnInit() {
  }
  
  itens():any{
    return this.shoppingCartService.items;
  }
  
  total():number{
    return this.shoppingCartService.total();
  }
}
