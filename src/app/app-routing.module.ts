import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcheteurComponent } from './page-acheteur/page-acheteur.component';
import { PageVendeurComponent } from './page-vendeur/page-vendeur.component';

const routes: Routes = [
  {path:"acheteur", component: PageAcheteurComponent, pathMatch: "full"},
  {path:"vendeur", component: PageVendeurComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
