import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.interface';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-womens-clothing-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './womensClothingPage.component.html',
  styleUrl: './womensClothingPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WomensClothingPageComponent {

  private productService = inject(ProductsService);

  public womenProducs: Product[] = [];

  ngOnInit(){
    this.productService.getCategoryProducts("women's clothing")
        .subscribe( product => this.womenProducs = product );
  }
}
