import { Component, Input, } from '@angular/core';
import { Product } from '../domain/product';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
/** product-view component*/
export class ProductViewComponent {
  @Input() product: Product.Product;
  
  /** product-view ctor */
  constructor() {

  }
  
  
}
