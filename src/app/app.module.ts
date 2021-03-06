import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
