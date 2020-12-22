import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{GebruikerComponent} from './gebruiker/gebruiker.component';
import{RuimteComponent}from './ruimte/ruimte.component';
import {ReserverenComponent} from './reserveren/reserveren.component';
import {ProfileComponent} from './profile/profile.component';
import {InlogenComponent} from './inlogen/inlogen.component';


const routes: Routes = [
  {path:'gebruikers', component:GebruikerComponent},
  {path:'ruimte' , component:RuimteComponent},
  {path:'reserveren' , component:ReserverenComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'inlogen' , component:InlogenComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
