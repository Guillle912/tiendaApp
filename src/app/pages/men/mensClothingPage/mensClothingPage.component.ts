import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.interface';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-mens-clothing-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './mensClothingPage.component.html',
  styleUrl: './mensClothingPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MensClothingPageComponent {

  private productService = inject(ProductsService);

  public menProducts: Product[] = [];

  ngOnInit() {
    this.productService.getCategoryProducts("men's clothing")
        .subscribe( products => this.menProducts = products );
  }
}
