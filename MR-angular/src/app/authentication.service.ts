import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = 'https://localhost:44309/api';

  isAuthorized: any;
  isAdmin: any;

  Login(val: any){
    return this.http.post(this.APIUrl+'/Login', val);
  }

  getUser(val: any)
  {
    return this.http.post(this.APIUrl+'/Profile', val);

  }

  Authorize(isAuthorized: boolean, isAdmin: any)
  {
    this.isAuthorized =  isAuthorized;
    if(isAdmin == 0)
    {
      this.isAdmin = false;
    }
    else 
    {
      this.isAdmin = true;
    }
    
  }
}
