import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//User Made
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { HelloWorldInterpolation } from './hello-world-interpolation/hello-world-interpolation.component';

import { HelloWorldBindingComponent } from './hello-world-binding/hello-world-binding.component';

import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDiComponent } from './hello-world-di/hello-world-di.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldInterpolation,
    HelloWorldBindingComponent,
    HelloWorldNgIfComponent,
    HelloWorldDiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
