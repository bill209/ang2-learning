import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';

@Component({
  selector: 'rb-root',
  templateUrl: 'recipe-book.component.html',
  styles: [`
    div.containers {
	  padding: 20px;
    }
  `]
})
export class RecipeBookAppComponent {

}
