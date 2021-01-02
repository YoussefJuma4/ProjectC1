import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private sharedService: SharedService, private Auth: AuthenticationService, private router: Router) { }
  
  isAuthorized: any;
  loggedUser: any;
  userTemplate: any;
  userCompleteInfo:any;
  voornaam:any;
  achternaam: any;

  getItems(userCompleteInfo: any[]) : any[]
  {
    return userCompleteInfo.map(item => {
      this.voornaam = item.Voornaam,
      this.achternaam = item.Achternaam
    })
  }

  ngOnInit(): void {
    this.isAuthorized = this.Auth.isAuthorized;
    this.loggedUser = JSON.parse(localStorage.getItem('user'))
    
    this.userTemplate = {
      Email : this.loggedUser.Email,
      Password : this.loggedUser.Wachtwoord
    }
    this.Auth.getUser(this.userTemplate).subscribe(data =>
      this.userCompleteInfo = data)
  }

  Logout()
  {
    this.Auth.isAuthorized = false;
    localStorage.removeItem('loggedUser');
    this.router.navigate(['inlogen'])
  }



  
  /*
  GebruikerList:any=[];
  geb:any;

  showUsers()
  {
    this.geb={
      Email:"nikola@gmail.com",
      Wachtwoord:"423423"
    }
    this.Auth.getUser(this.geb).subscribe(data =>
      this.GebruikerList = data);
    }*/
}
