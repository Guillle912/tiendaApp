import { catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login.interface';
import { LoginResponse } from '../models/loginResponse.interface';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public http = inject(HttpClient)
  private router = inject(Router)

  constructor() { }

  private setAuthentication(token: string){
    localStorage.setItem('tokenTienda', token)
  }

  login(body: Login){
    return this.http.post<LoginResponse>( `https://fakestoreapi.com/auth/login`, body)
            .pipe(
              map( (response: LoginResponse) => this.setAuthentication( response.token )),
              catchError( error => throwError( () => 'Incorrect login'))
            )
  }

  logOut(){
    localStorage.removeItem('tokenTienda');
    this.router.navigateByUrl('/')
  }
}
