import { Component, OnInit } from '@angular/core';
import {Ingredient} from "app/shared/ingredient";
import {ShoppingListService} from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {

  isAdd = true;
  item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient){
  	console.log("this.isAdd",this.isAdd);
  	
    if(this.isAdd){
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    } else {

    }
  }

}
