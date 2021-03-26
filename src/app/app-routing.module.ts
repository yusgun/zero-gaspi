import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcheteurComponent } from './page-acheteur/page-acheteur.component';
import { NavigationComponent } from './page-parametre/navigation/navigation.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';
import { AjoutLotComponent } from './page-vendeur/ajout-lot/ajout-lot.component';
import { PageVendeurComponent } from './page-vendeur/page-vendeur.component';

const routes: Routes = [
  {path:"acheteur", component: PageAcheteurComponent, pathMatch: "full"},
  {path:"vendeur", component: PageVendeurComponent, pathMatch: "full"},
  {path: "parametres", component: PageParametreComponent, pathMatch: "full"},
  {path: "ajout-lot", component: AjoutLotComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
