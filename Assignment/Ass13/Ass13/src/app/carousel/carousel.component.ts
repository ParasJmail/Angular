import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent {
  images = [1,2,3].map((n) =>  `https://picsum.photos/id/${n}/1550/500`);
  

}
