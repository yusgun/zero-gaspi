import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcheteurComponent } from './page-acheteur/page-acheteur.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';

const routes: Routes = [
  {path:"acheteur", component: PageAcheteurComponent, pathMatch: "full"},
  {path: "paramètres", component: PageParametreComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
