import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Q3Component } from './q3/q3.component';
import { FormsModule } from '@angular/forms';
import { Q4Component } from './q4/q4.component';

@NgModule({
  declarations: [
    AppComponent,
    Q3Component,
    Q4Component
  ],
  imports: [
    BrowserModule,

    //I have import it
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
