import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
