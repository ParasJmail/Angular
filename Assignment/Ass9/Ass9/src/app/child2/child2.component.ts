import { Component,OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  
  public child2 : any;

  constructor(public sobj : StringService)
  {

  }

  ngOnInit()
  {
    this.child2 = this.sobj.CountCapital();
  }

}
