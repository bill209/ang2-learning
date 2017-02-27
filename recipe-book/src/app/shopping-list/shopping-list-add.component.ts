import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "app/shared/ingredient";
import {ShoppingListService} from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  isAdd = null;
  @Input() item: Ingredient;
	@Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes): void {
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = { name : null, amount : null };
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);

    // add a new ingredient
    if(this.isAdd){
      this.sls.addItem(newIngredient);
    } else {
      // edit an ingredient
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.item = { name : null, amount : null };
    this.isAdd = true;
	  this.cleared.emit(null);
  }

}
