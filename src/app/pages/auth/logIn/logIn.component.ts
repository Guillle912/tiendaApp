import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './logIn.component.html',
  styleUrl: './logIn.component.css',
})
export class LogInComponent {

  private userService = inject(UserService);
  private router          = inject(Router);

  public newLogin!: FormGroup;

  constructor(){
    this.newLogin = new FormGroup({
      username: new FormControl( null, Validators.required ),
      password: new FormControl( null, Validators.required)
    })
  }

  onSubmit(){
    this.userService.login(this.newLogin.value).subscribe({

      next: () => this.router.navigateByUrl('/layout/home')
    })
  }
}
