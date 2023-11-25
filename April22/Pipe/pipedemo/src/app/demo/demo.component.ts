import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public name = "Paras";
 
  today = new Date();

  public value = 32.898;

  public Institute = {
    "name" : "Marvellous",
    "Location" : "Pune"
  }

}
