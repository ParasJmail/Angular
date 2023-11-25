import { Component } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {
  public str : string = "";
  public GetData(name : any)
  {
    this.str = name;
  }


}
