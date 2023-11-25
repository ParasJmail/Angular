import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent {

  public Batches = [{"Name" : "PPA","Fees" : 1800},
                    {"Name" : "LB","Fees" : 1800}

];

}
