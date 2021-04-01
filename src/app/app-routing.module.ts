import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcheteurComponent } from './page-acheteur/page-acheteur.component';
import { NavigationComponent } from './page-parametre/navigation/navigation.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';
import { AjoutLotComponent } from './page-vendeur/ajout-lot/ajout-lot.component';
import { ModifLotComponent } from './page-vendeur/modif-lot/modif-lot.component';
import { PageVendeurComponent } from './page-vendeur/page-vendeur.component';
import { UpdateLotComponent } from './page-vendeur/update-lot/update-lot.component';
import { HistoriqueComponent } from './page-acheteur/historique/historique.component';


const routes: Routes = [
  {path:"acheteur/historique", component: HistoriqueComponent, pathMatch: "full"},
  {path:"acheteur", component: PageAcheteurComponent, pathMatch: "full"},
  {path:"vendeur", component: PageVendeurComponent, pathMatch: "full"},
  {path: "parametres", component: PageParametreComponent, pathMatch: "full"},
  {path: "ajout-lot", component: AjoutLotComponent, pathMatch: "full"},
  {path: "modif-lot", component: ModifLotComponent, pathMatch: "full"},
  {path: "update-lot/:id", component: UpdateLotComponent, pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
