import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySelectComponent } from './my-select/my-select.component';
import { MyMapComponent } from './my-map/my-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MySelectComponent,
    MyMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
