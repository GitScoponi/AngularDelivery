import { IMenuItem } from './MenuItem.Model';
export class CartItem{
    
    constructor(public menuItem:IMenuItem, public quantity: number = 1){}

    value():number {
        return this.menuItem.price * this.quantity;
    }


}