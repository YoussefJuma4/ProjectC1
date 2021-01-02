import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-gebruikers',
  templateUrl: './show-gebruikers.component.html',
  styleUrls: ['./show-gebruikers.component.css']
})
export class ShowGebruikersComponent implements OnInit {

  constructor(private service:SharedService) { }

  GebruikerList:any=[];
 
  ModalTitle:string;
  ActivateAddEditGebComp:boolean = false;
  geb:any;

  GebruikerIdFilter: string = "";
  GebruikerNaamFilter: string= "";
  GebruikerListWithoutFilter : any = [];

  ngOnInit(): void {
    this.refreshGebList();  
  }
  addClick(){
    this.geb={
      id:0,
      Voornaam:"",
      Achternaam:"",
      Email:"",
      Wachtwoord:""
    }
    this.ModalTitle="Gebruiker Toevoegen";
    this.ActivateAddEditGebComp=true;
  }

  editClick(item){
    this.geb = item;
    this.ModalTitle = "Gebruiker wijzigen";
    this.ActivateAddEditGebComp= true;
  
  }
  deleteClick(item){
    if(confirm('Gebruiker verwijderen?')){
      this.service.deleteGebruiker(item.GebruikerId).subscribe(data=>{
        alert(data.toString());
        this.refreshGebList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditGebComp=false;
    this.refreshGebList();
  }
  refreshGebList(){
    this.service.getGebList().subscribe(data=>{
      this.GebruikerList=data;
      this.GebruikerListWithoutFilter = data;
    });
  }
  FilterFn(){
    var GebruikerIdFilter = this.GebruikerIdFilter;
    var GebruikerNaamFilter = this.GebruikerNaamFilter;
    this.GebruikerList = this.GebruikerListWithoutFilter.filter(function (el){
      return el.id.toString().toLowerCase().includes(
        GebruikerIdFilter.toString().trim().toLowerCase()
      )&&
      el.voornaam.toString().toLowerCase().includes(
        GebruikerNaamFilter.toString().trim().toLowerCase()
      )
    });
  }
}
