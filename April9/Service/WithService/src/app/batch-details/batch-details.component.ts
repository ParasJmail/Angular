import { Component,OnInit } from '@angular/core';
import { ParasService } from '../paras.service';


@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent {
  public batches : any = [];
  
    constructor(public mobj : ParasService)
      {
        
      }

    ngOnInit()
      {
        this.batches = this.mobj.getbatchdetails();
      }
}
