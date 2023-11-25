import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  public child1 : any;

  constructor(public iobj : NumberService)
  {

  }

  ngOnInit()
  {
    this.child1 = this.iobj.ChkPrime()
  }


}
