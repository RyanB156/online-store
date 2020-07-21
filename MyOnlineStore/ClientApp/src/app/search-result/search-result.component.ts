import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../domain/product';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
/** search-result component*/
export class SearchResultComponent implements OnInit {

  searchText: string = "";
  products: Product.Product[] = [];
  httpClient: HttpClient;
  baseUrl: string;
  
    /** search-result ctor */
  constructor(http: HttpClient, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {

    this.httpClient = http;
    this.baseUrl = baseUrl;
  }
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        console.log(params);
        this.searchText = params['name'];
      });

      this.search();

      console.log(this.searchText);
  }

  search() {
    this.httpClient.get<Product.Product[]>(this.baseUrl + `product/searchproducts/${this.searchText}`).subscribe(result => {
      console.log("Got the search products");
      console.log(result);
      this.products = result;
    }, error => {
      console.error(error)
    });
  }

  searchKeyUp(evt) {
    if (evt.key === "Enter") {
      console.log(`Searching for ${this.searchText}`);
      this.search();
    }
  }
}
