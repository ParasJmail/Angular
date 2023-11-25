import { Component } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component {

  message = "Marvelous InfoSystem";
  canEdit = false;

  fun()
  {
    this.canEdit = !this.canEdit;
    if(this.canEdit)
    {
      this.message = "Education for Better Tomorrow"
    }
    else
    {
      this.message = "Marvelous InfoSystem";
    }
  }

}
