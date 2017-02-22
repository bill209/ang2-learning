import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";



const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'recipes', component: RecipesComponent }
]

export const ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
