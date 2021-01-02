import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-reserveren',
  templateUrl: './add-reserveren.component.html',
  styleUrls: ['./add-reserveren.component.css']
})
export class AddReserverenComponent implements OnInit {

  @Input() res: any;
  ReserverenId:string;
  RuimteId: string;
  GebruikerId: string;
  Datum : string;
  Tijd : string;

  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.ReserverenId = this.res.RuimteId;
    this.RuimteId = this.res.RuimteId;
    this.GebruikerId = this.res.GebruikerId;
    this.Datum = this.res.Datum;
    this.Tijd = this.res.Tijd;
  }
  addRes(){
    var val = {reserveren:this.ReserverenId,
              RuimteId: this.RuimteId,
              GebruikerId: this.GebruikerId,
              Datum : this.Datum,
              Tijd : this.Tijd
              };
        this.service.addReserveren(val).subscribe(res=>{
          alert(res.toString());
        });
  }
  updateRes(){   var val = {RuimteId:this.RuimteId,
    Datum : this.Datum,
    Tijd : this.Tijd 
   };
  this.service.updateReserveren(val).subscribe(res=>{
    alert(res.toString());
});
}
}
