import { IMenuItem } from './../../../Model/MenuItem.Model';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
 @Input() item: IMenuItem;
 @Output() add = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
  
  }
  emitAddEvent(){
    this.add.emit(this.item);
  }
} 