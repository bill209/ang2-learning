import { Ingredient } from "../shared";

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient){
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient){
    console.log("oldItem",oldItem);
    
    this.items[this.items.indexOf(oldItem)] = newItem;
    console.log("this.items",this.items);
    
  }

}
