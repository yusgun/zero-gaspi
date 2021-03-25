import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { PageAcheteurComponent } from './page-acheteur/page-acheteur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { LineCardComponent } from './line-card/line-card.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';
import { ProfilComponent } from './page-parametre/profil/profil.component';
import { SecuriteComponent } from './page-parametre/securite/securite.component';
import { ParametresDuCompteComponent } from './page-parametre/parametres-du-compte/parametres-du-compte.component';
import { PaiementComponent } from './page-parametre/paiement/paiement.component';
import { NotificationComponent } from './page-parametre/notification/notification.component';
import { PageVendeurComponent } from './page-vendeur/page-vendeur.component';
import { NavbarVendeurComponent } from './navbar-vendeur/navbar-vendeur.component';
import { AjoutLotComponent } from './page-vendeur/ajout-lot/ajout-lot.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageAcheteurComponent,
    NavbarComponent,
    PageParametreComponent,
    ProfilComponent,
    SecuriteComponent,
    ParametresDuCompteComponent,
    PaiementComponent,
    NotificationComponent,
    ListingCardComponent,
    LineCardComponent,
    PageParametreComponent,
    PageVendeurComponent,
    NavbarVendeurComponent,
    AjoutLotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
