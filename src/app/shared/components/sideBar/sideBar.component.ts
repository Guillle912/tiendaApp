import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItems {
  route: string;
  title: string;
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sideBar.component.html',
  styleUrl: './sideBar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {

  public menuItems = signal<MenuItems[]>([
    { route: 'home', title: 'Home'},
    { route: 'electronics', title: 'Electronics'},
    { route: 'jewelery', title: 'Jewelery'},
    { route: 'men', title: 'Men´s clothing'},
    { route: 'women', title: 'Women´s clothing'},
  ])
}
