import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { NameOfComponentComponent } from './name-of-component/name-of-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    NameOfComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
