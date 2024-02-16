import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.interface';
import { Observable, catchError, firstValueFrom, of } from 'rxjs';
import { LoginResponse } from '../models/loginResponse.interface';
import { Login } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = 'https://fakestoreapi.com/products';

  public http = inject(HttpClient)


  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>( this.baseUrl )
          .pipe(
            catchError(error => of([]))
          )
  }

  getCategoryProducts( category: string ): Observable<Product[]>{
    return this.http.get<Product[]>( `${this.baseUrl}/category/${ category }` )
          .pipe(
            catchError(error => of([]))
          )
  }

  getProductById( id: string ): Observable<Product>{
    return this.http.get<Product>( `${this.baseUrl}/${ id }`)
  }



}
