import { Injectable } from '@angular/core';
import { IProduct } from './product-list/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl: string = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl).pipe(
        tap(data => console.log('All', JSON.stringify(data))),
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
        errorMsg = `An error occurred: ${err.error.message}`
    } else {
        errorMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }
}
