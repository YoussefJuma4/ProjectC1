import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-inlogen',
  templateUrl: './inlogen.component.html',
  styleUrls: ['./inlogen.component.css']
})
export class InlogenComponent implements OnInit {

  constructor(private Auth : AuthenticationService, private router: Router) { }
  
  selectedRole = 0;
  formModel = {
    Email: '',
    Password: ''
  }

  loggedUser = {
    Email:'',
    Password: ''
    }

  GebruikerList:any;
  geb:any;
  isAuthorized: any;

  userCompleteInfo:any=[];
  userTemplate={
    Email: '',
    Password: ''
  }
  ngOnInit(): void {
  }

  RoleSelection(role){
    this.selectedRole = role;
  }
  
  Login()
  {
    this.geb={
      Email: this.formModel.Email,
      Wachtwoord: this.formModel.Password,
      Admin: this.selectedRole
    }
    console.log(this.geb.Admin)
    this.Auth.Login(this.geb).subscribe(data => {
      this.isAuthorized = data
      this.Auth.Authorize(this.isAuthorized, this.selectedRole);
      if(this.isAuthorized){this.router.navigate(['profile']), 
      this.loggedUser.Email = this.formModel.Email,
      this.loggedUser.Password = this.formModel.Password,
      localStorage.setItem('user', JSON.stringify(this.loggedUser))
      
    }})}
   
}
