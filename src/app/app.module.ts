import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { PageAcheteurComponent } from './page-acheteur/page-acheteur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageParametreComponent } from './page-parametre/page-parametre.component';
import { ProfilComponent } from './page-parametre/profil/profil.component';
import { SecuriteComponent } from './page-parametre/securite/securite.component';
import { ParametresDuCompteComponent } from './page-parametre/parametres-du-compte/parametres-du-compte.component';
import { PaiementComponent } from './page-parametre/paiement/paiement.component';
import { NotificationComponent } from './page-parametre/notification/notification.component';


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
    NotificationComponent
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
