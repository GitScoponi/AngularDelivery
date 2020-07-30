import { IMenuItem } from './../Model/MenuItem.Model';
import { CartItem } from './../Model/ShoppingCart.Model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];
    constructor() { }
    
    clear(){
        this.items = [];
    }
    
    addItem(item:IMenuItem){
        let foundItem = this.items.find(x=> x.menuItem.id === item.id);
        if(foundItem){
            foundItem.quantity = foundItem.quantity +1;
        }else{
            this.items.push(new CartItem(item));
        }
        
    }
    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item), 1);     
    }
    total():number{
        return this.items.map(item=> item.value()).reduce((prev, value) => prev + value, 0);
    }
}
