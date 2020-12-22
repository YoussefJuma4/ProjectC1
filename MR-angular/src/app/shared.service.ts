import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44309/api';

  constructor(private http:HttpClient) { }
  // Gebruikers Connecties
  getGebList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Gebruikers');
  }
  addGebruiker(val:any){
    return this.http.post(this.APIUrl+'/Gebruikers',val);
  }
  updateGebruiker(val:any){
    return this.http.put(this.APIUrl+'/Gebruikers',val);
}
  deleteGebruiker(val:any){
    return this.http.delete(this.APIUrl+'/Gebruikers/'+ val);
}

// Ruimtes Connecties

getRuimList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Ruimte');
}
addRuimte(val:any){
  return this.http.post(this.APIUrl+'/Ruimte',val);
}
updateRuimte(val:any){
  return this.http.put(this.APIUrl+'/Ruimte',val);
}
deleteRuimt(val:any){
  return this.http.delete(this.APIUrl+'/Ruimte/'+ val);
}

// Reserveren Connectie

getResList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Reserveren');
}
addReserveren(val:any){
  return this.http.post(this.APIUrl+'/Reserveren',val);
}
updateReserveren(val:any){
  return this.http.put(this.APIUrl+'/Reserveren',val);
}
deleteReserveren(val:any){
  return this.http.delete(this.APIUrl+'/Reserveren/'+ val);
}

  
  
}
