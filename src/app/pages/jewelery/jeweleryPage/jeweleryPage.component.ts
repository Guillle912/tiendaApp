import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.interface';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-jewelery-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './jeweleryPage.component.html',
  styleUrl: './jeweleryPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class JeweleryPageComponent {

  private productService = inject(ProductsService);

  public jewelery: Product[] = [];

  ngOnInit(){
    this.productService.getCategoryProducts('jewelery')
        .subscribe( product => this.jewelery = product );
  }

}
