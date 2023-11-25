import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSucessDirective } from './comp-sucess.directive';
import { CompFailureDirective } from './comp-failure.directive';
//User Defined
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomStyleDirective } from './custom-style.directive';





@NgModule({
  declarations: [
    AppComponent,
    CompSucessDirective,
    CompFailureDirective,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //User Defined
    
    NgIf,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
