import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { ParasService } from './paras.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchlistComponent,
    BatchDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ParasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
