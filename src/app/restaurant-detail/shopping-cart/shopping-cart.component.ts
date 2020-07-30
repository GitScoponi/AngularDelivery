import { CartItem } from './../../../Model/ShoppingCart.Model';
import { IMenuItem } from './../../../Model/MenuItem.Model';
import { ShoppingCartService } from './../../../Services/shoppingCart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 nItens: number= 0;
  constructor(private shoppingCartService: ShoppingCartService) { }
  
  ngOnInit() {
  }
  
  itens(): any[] {
  
    return this.shoppingCartService.items;
    
  }
  updateItens(){
     this.nItens = this.shoppingCartService.items.length;
  }
  
  total(): number {
    return this.shoppingCartService.total();
  }
  clear(){
    this.shoppingCartService.clear();
    this.updateItens();
  }
  remove(item: any) {
    this.shoppingCartService.removeItem(item);
    this.updateItens();
  }
  add(item: any) {
    this.shoppingCartService.addItem(item);
    this.updateItens();
    
    
  }
}
