import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-edite-gebruiker',
  templateUrl: './edite-gebruiker.component.html',
  styleUrls: ['./edite-gebruiker.component.css']
})
export class EditeGebruikerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() geb: any;
  GebruikerId:string;
  Voornaam:string;
  Achternaam:string;
  Email:string;
  Wachtwoord: string;

  ngOnInit(): void {
    this.GebruikerId = this.geb.GebruikerId;
    this.Voornaam= this.geb.Voornaam;
    this.Achternaam=this.geb.Achternaam;
    this.Email=this.geb.Email;
    this.Wachtwoord = this.geb.Wachtwoord;
  }

  addGebruiker(){
    var val = {GebruikerId:this.GebruikerId,
              Voornaam: this.Voornaam,
              Achternaam: this.Achternaam,
              Email: this.Email,
              Wachtwoord: this.Wachtwoord};
        this.service.addGebruiker(val).subscribe(res=>{
          alert(res.toString());
        });
  }
  updateGebruiker(){   var val = {GebruikerId:this.GebruikerId,
    Voornaam: this.Voornaam,
    Achternaam: this.Achternaam,
    Email: this.Email,
    Wachtwoord: this.Wachtwoord};
  this.service.updateGebruiker(val).subscribe(res=>{
    alert(res.toString());
});
}


}
