import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GebruikerComponent } from './gebruiker/gebruiker.component';
import { ShowGebruikersComponent } from './show-gebruikers/show-gebruikers.component';
import { EditeGebruikerComponent } from './add/edite-gebruiker/edite-gebruiker.component';
import {SharedService} from './shared.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { RuimteComponent } from './ruimte/ruimte.component';
import { ShowRuimComponent } from './show-ruim/show-ruim.component';
import { EditeRuimComponent } from './edite-ruim/edite-ruim.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { InlogenComponent } from './inlogen/inlogen.component';
import { ProfileComponent } from './profile/profile.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { ShowReserverenComponent } from './show-reserveren/show-reserveren.component';
import { AddReserverenComponent } from './add-reserveren/add-reserveren.component';



@NgModule({
  declarations: [
    AppComponent,
    GebruikerComponent,
    ShowGebruikersComponent,
    EditeGebruikerComponent,
    RuimteComponent,
    ShowRuimComponent,
    EditeRuimComponent,
    MainNavComponent,
    InlogenComponent,
    ProfileComponent,
    ReserverenComponent,
    ShowReserverenComponent,
    AddReserverenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
