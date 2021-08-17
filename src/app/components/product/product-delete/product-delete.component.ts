import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,   //CONSULTA BACKEND
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {//inicialização
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    }, erros => {
      this.productService.showMessage('Ocorreu um erro ao buscar o produto!')
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Deletado com sucesso!')
      this.router.navigate(["/products"]);
    }, erros => {
      this.productService.showMessage('Ocorreu um erro ao buscar o produto!')
    }
    )
  }

  cancelar(): void {
    this.router.navigate(["products"]);
  }
}
