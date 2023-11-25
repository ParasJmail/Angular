import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public MyEvent = new EventEmitter();

 public send( Name : any)
  {
      this.MyEvent.emit(Name);

  }
}
