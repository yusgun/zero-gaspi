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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageAcheteurComponent,
    NavbarComponent,
    ListingCardComponent,
    LineCardComponent
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
