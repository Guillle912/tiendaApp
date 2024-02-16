import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

  @Input() category!: Product;



}
