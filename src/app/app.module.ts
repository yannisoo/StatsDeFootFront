import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RechercheComparatifComponent } from './recherche-comparatif/recherche-comparatif.component';
import { ItemComponent } from './recherche-comparatif/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheComparatifComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
