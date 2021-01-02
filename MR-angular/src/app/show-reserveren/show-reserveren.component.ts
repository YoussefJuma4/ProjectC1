import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-show-reserveren',
  templateUrl: './show-reserveren.component.html',
  styleUrls: ['./show-reserveren.component.css']
})
export class ShowReserverenComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshResList()
  }

  ReserverenList:any=[];
 
  ModalTitle:string;
  ActivateAddEditResComp:boolean = false;
  res:any;


  addClick(){
    this.res={
      id:0,
      GebruikerId:"",
      RuimteId:"",
      Datum : "",
      Tijd : ""
    }
    this.ModalTitle="Reserveren";
    this.ActivateAddEditResComp=true;
  }

  editClick(item){
    this.res = item;
    this.ModalTitle = "Gebruiker wijzigen";
    this.ActivateAddEditResComp= true;
  
  }
  deleteClick(item){
    if(confirm('Reservern verwijderen?')){
      this.service.deleteReserveren(item.ReserverenId).subscribe(data=>{
        alert(data.toString());
        this.refreshResList();
      })
    }
  }




  closeClick(){
    this.ActivateAddEditResComp=false;
    this.refreshResList();
  }
  refreshResList(){
    this.service.getResList().subscribe(data=>{
      this.ReserverenList=data;
    });
  }

}
