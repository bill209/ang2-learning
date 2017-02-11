import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { TestdirDirective } from './testdir.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    TestdirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
