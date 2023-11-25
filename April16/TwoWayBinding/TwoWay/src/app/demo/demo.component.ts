import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
    public BatchName : string = '';
    message = "Submit"
    bu = false;
    
    
    
    Submit()
    {
      this.bu = !this.bu;

      if (this.bu) {
        this.message = 'Submit';
        } else 
        {
        this.message = "Not Submit";
        }
    }

}
