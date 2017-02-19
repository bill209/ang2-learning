import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/'
import { ShoppingListService } from './';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    console.log("this.sls.getItems()",this.sls.getItems());
    
    this.items = this.sls.getItems();
  }

}
