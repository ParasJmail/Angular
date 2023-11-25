import { Component } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {
  message = "";
  canEditCa = false;
  canEditSa = false;
  Cap()
  {
    this.canEditCa = !this.canEditCa;

    if(this.canEditCa)
    {
       this.message = "MARVELLOUS INFOSYSTEM";;
    }
  }
  Sma()
  {
    this.canEditSa = !this.canEditSa;

    if(this.canEditSa)
    {
      this.message = "marvellous infosystem";
    }
  }
}
