import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
  ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
