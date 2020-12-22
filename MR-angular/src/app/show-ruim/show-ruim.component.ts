import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-show-ruim',
  templateUrl: './show-ruim.component.html',
  styleUrls: ['./show-ruim.component.css']
})
export class ShowRuimComponent implements OnInit {

  constructor(private service:SharedService) { }

  RuimteList:any=[];
 
  ModalTitle:string;
  ActivateAddEditRuimComp:boolean = false;
  ruim:any;

  RuimteIdFilter: string = "";
  LocatieFilter: string= "";
  RuimteListWithoutFilter : any = [];

  ngOnInit(): void {
    this.refreshRuimList();  
  }
  addClick(){
    this.ruim={
      id:0,
      Locatie:"",
      Capaciteit:""
      
    }
    this.ModalTitle="Ruimte Toevoegen";
    this.ActivateAddEditRuimComp=true;
  }

  editClick(item){
    this.ruim = item;
    this.ModalTitle = "Ruimte wijzigen";
    this.ActivateAddEditRuimComp= true;
  
  }
  deleteClick(item){
    if(confirm('Ruimte verwijderen?')){
      this.service.deleteRuimt(item.RuimteId).subscribe(data=>{
        alert(data.toString());
        this.refreshRuimList();
      })
    }
  }




  closeClick(){
    this.ActivateAddEditRuimComp=false;
    this.refreshRuimList();
  }
  refreshRuimList(){
    this.service.getRuimList().subscribe(data=>{
      this.RuimteList=data;
      this.RuimteListWithoutFilter = data;
    });
  }
  FilterFn(){
    var RuimteIdFilter = this.RuimteIdFilter;
    var LocatieFilter = this.LocatieFilter;
    this.RuimteList = this.RuimteListWithoutFilter.filter(function (el){
      return el.id.toString().toLowerCase().includes(
        RuimteIdFilter.toString().trim().toLowerCase()
      )&&
      el.Locatie.toString().toLowerCase().includes(
        LocatieFilter.toString().trim().toLowerCase()
      )
    });
  }

}
