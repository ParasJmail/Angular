import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!:Product | undefined; //pass data from parent to child component
  @Output() notify = new EventEmitter(); //pass data  from child to parent
}
