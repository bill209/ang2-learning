import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Ingredient} from "app/shared/ingredient";
import {ShoppingListService} from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  isAdd = null;
  @Input() item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes): void {
    console.log("changes",changes);
    
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = { name : null, amount : null };
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    if(this.isAdd){
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    } else {

    }
  }

}
