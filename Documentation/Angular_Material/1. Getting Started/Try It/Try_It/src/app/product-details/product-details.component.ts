import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
      //First get product id from current route.
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));

      //Find the product correspond with the id provided in route.
      this.product = products.find(product => product.id === productIdFromRoute);
  }
}
