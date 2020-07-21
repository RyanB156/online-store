import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../domain/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  featuredProduct: Product.Product;
  searchText: string = "";

  constructor(http: HttpClient, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product.Product>(baseUrl + 'product/featuredproduct').subscribe(result => {
      console.log("Got the product");
      this.featuredProduct = result;
      console.log(this.featuredProduct);
    }, error => {
        console.error(error)
  });
  }

  searchKeyUp(evt) {
    if (evt.key === "Enter") {
      console.log(`Searching for ${this.searchText}`);
      this.router.navigateByUrl(`/search-result/${this.searchText}`);
    }
  }

}
