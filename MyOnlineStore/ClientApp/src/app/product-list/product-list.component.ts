import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../domain/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
/** product-list component*/
export class ProductListComponent {

  products: Product.Product[];

    /** product-list ctor */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product.Product[]>(baseUrl + 'product/products').subscribe(result => {
      console.log("Got the product");
      this.products = result;
    }, error => {
      console.error(error)
    });
  }
}
