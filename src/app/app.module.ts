import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RechercheComparatifComponent } from './components/recherche-comparatif/recherche-comparatif.component';
import { ItemComponent } from './components/recherche-comparatif/item/item.component';
import { ComparativeCardComponent } from './components/comparative-card/comparative-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheComparatifComponent,
    ItemComponent,
    ComparativeCardComponent
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
