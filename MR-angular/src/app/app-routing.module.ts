import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{GebruikerComponent} from './gebruiker/gebruiker.component';
import{RuimteComponent}from './ruimte/ruimte.component';
import {ReserverenComponent} from './reserveren/reserveren.component';
import {ProfileComponent} from './profile/profile.component';
import {InlogenComponent} from './inlogen/inlogen.component';
import { AdminauthGuard } from './adminauth.guard';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'gebruikers', component:GebruikerComponent, canActivate: [AdminauthGuard]},
  {path:'ruimte' , component:RuimteComponent, canActivate: [AdminauthGuard]},
  {path:'reserveren' , component:ReserverenComponent, canActivate: [AuthGuard]},
  {path:'profile' , component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'inlogen' , component:InlogenComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
