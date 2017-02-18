import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-root',
  templateUrl: 'recipe-book.component.html',
  styles: [`
    div.containers {
	  padding: 20px;
    }
  `],
  providers: [ RecipeService ]
})
export class RecipeBookAppComponent {

}
