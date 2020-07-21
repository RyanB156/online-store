import { Component, Inject } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detailed-view',
    templateUrl: './product-detailed-view.component.html',
    styleUrls: ['./product-detailed-view.component.scss']
})
/** product-detailed-view component*/
export class ProductDetailedViewComponent {

  product: Product.Product;
  id: string;

    /** product-detailed-view ctor */
  constructor(http: HttpClient, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {

    this.route.params.subscribe(params => {
      console.log(params);
      let id = params['id'];
      http.get<Product.Product>(baseUrl + `product/getproduct/${id}`).subscribe(result => {
        console.log("Got the search products in product-detailed-view");
        console.log(result);
        this.product = result;
      }, error => {
        console.error(error)
      });
    });
    
  }
  
}
