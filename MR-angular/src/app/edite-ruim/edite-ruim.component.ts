import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-edite-ruim',
  templateUrl: './edite-ruim.component.html',
  styleUrls: ['./edite-ruim.component.css']
})
export class EditeRuimComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() ruim: any;
  RuimteId:string;
  Locatie:string;
  Capaciteit:string;
 

  ngOnInit(): void {
    this.RuimteId = this.ruim.RuimteId;
    this.Locatie= this.ruim.Locatie;
    this.Capaciteit=this.ruim.Capaciteit;
  }
  addRuimte(){
    var val = {RuimteId:this.RuimteId,
              Locatie: this.Locatie,
              Capaciteit: this.Capaciteit,
              };
        this.service.addRuimte(val).subscribe(res=>{
          alert(res.toString());
        });
  }
  updateRuimte(){   var val = {RuimteId:this.RuimteId,
    Locatie: this.Locatie,
    Capaciteit: this.Capaciteit,
   };
  this.service.updateRuimte(val).subscribe(res=>{
    alert(res.toString());
});
}

}
