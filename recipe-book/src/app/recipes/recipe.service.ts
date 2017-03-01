import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', '/assets/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', '/assets/the_perfect_summer_salad.jpg', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1)
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    // this.deleteRecipe(oldRecipe);
    // this.addRecipe(newRecipe);
  }

//   deleteIngredient(recipeIdx: number, ingredientIdx){
//     this.recipes[recipeIdx].ingredients.splice(ingredientIdx,1);
//   }

  addIngredient(recipeIdx: number, name: string, amount: number){
    this.recipes[recipeIdx].ingredients.push({ 'name' : name, 'amount' : amount});
  }

}
