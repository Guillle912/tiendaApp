import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../shared/components/sideBar/sideBar.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { UserService } from '../../core/services/user.service';

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
export class LayoutPageComponent {
  private userService = inject(UserService);

  logOut(){
    return this.userService.logOut();
  }
}
