import { Product } from './../../product/product.model';
import { ProductService } from './../../product/product.service';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'action'];
  dataSource: any;
  products = new Array<Product>();
  

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.read().subscribe(products=>{
      this.products= products
      this.dataSource= this.products
      console.log(this.products)
    })

  }

}
