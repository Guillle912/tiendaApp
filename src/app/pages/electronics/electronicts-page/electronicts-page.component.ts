import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.interface';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-electronicts-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './electronicts-page.component.html',
  styleUrl: './electronicts-page.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ElectronictsPageComponent {
  public productService = inject(ProductsService);
  private cdr = inject(ChangeDetectorRef)
  public products: Product[] = [];

  ngOnInit() {
    this.productService.getCategoryProducts('electronics')
        .subscribe( products => {
          this.products = products
          // this.cdr.detectChanges()
          console.log(this.products)
        })


  }
}
