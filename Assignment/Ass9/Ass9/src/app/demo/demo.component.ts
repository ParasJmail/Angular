import { Component,OnInit } from '@angular/core';
import { ArithemethicService } from '../arithemethic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public Addition : any;
  public Substraction : any;

  constructor(public mobj : ArithemethicService)    //Dependency Injection
  {}

  ngOnInit()
  {
    this.Addition = this.mobj.Add();
    this.Substraction = this.mobj.Sub();
  }

}
