import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { LoginResponse } from '../models/loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public http = inject(HttpClient)
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
}
