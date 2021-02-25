import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { InputCardComponent } from './input-card/input-card.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { ParamComponent } from './param/param.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConnexionComponent,
    FormInscriptionComponent,
    InputCardComponent,
    ButtonSubmitComponent,
    ParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
