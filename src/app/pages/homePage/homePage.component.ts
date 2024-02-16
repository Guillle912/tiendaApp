import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product.interface';
import { Observable, of } from 'rxjs';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePageComponent {
  public productService = inject(ProductsService);
  private cdr = inject(ChangeDetectorRef)
  public products: Product[] = [];

  ngOnInit() {
    this.productService.getAllProducts()
        .subscribe( products => {
          this.products = products
          // this.cdr.detectChanges()
          console.log(this.products)
        })


  }

}
