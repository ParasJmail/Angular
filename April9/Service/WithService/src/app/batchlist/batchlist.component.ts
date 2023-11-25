import { Component } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent {

  public Batches = [{"Name" : "PPA","Fees" : 1800},
                    {"Name" : "LB","Fees" : 1800}
]

}
