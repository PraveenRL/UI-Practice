import { Component, OnInit } from '@angular/core';

import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  searchText: string;
  tempProductList = [];

  constructor(
    private productListService: ProductListService
  ) { }

  ngOnInit(): void {
    this.productListService.getProductList().subscribe(response => {
      this.tempProductList = response;
    })
  }

  filterProductList(event) {
    let val = this.searchText;
    this.productListService.filterProductList(val)
      .then((response) => {
        this.tempProductList = response;
      })
  }

}
