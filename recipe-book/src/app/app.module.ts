import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeBookAppComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule { }
