import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { ProductsService } from '../../core/services/products.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { Product } from '../../core/models/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './productDetail.component.html',
})
export class ProductDetailComponent {

  private productsService = inject(ProductsService);
  private activatedRoute  = inject(ActivatedRoute);

  public product!: Product;


  ngOnInit(){
    console.log('hola')
    this.activatedRoute.params.subscribe(params => {
      this.productsService.getProductById(params['id']).subscribe(product => {
        this.product = product;

      })
    });
  }
}
