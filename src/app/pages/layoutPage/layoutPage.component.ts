import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../shared/components/sideBar/sideBar.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideBarComponent,
    CardComponent
  ],
  templateUrl: './layoutPage.component.html',
  styleUrl: './layoutPage.component.css',
})
export class LayoutPageComponent { }
