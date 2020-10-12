import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RechercheComparatifComponent } from './recherche-comparatif/recherche-comparatif.component';

const routes: Routes = [
  { path: 'comparatif', component: RechercheComparatifComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
