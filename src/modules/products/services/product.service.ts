import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IproductDTO } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl!: string;
  constructor(private http: HttpClient) {
    this.apiUrl = env.API_URL;
  }

  getProducts(): Observable<IproductDTO[]> {
    return this.http.get<IproductDTO[]>(this.apiUrl + '/products');
  }

  getProduct(id: any): Observable<IproductDTO> {
    return this.http.get<IproductDTO>(this.apiUrl + '/products/' + id);
  }


  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + '/products/categories');
  }

  getProductByCategory(category: string): Observable<IproductDTO[]> {
    return this.http.get<IproductDTO[]>(this.apiUrl + '/products/category/' + category);
  }


  getProductBySort(sort: string): Observable<IproductDTO[]> {
    return this.http.get<IproductDTO[]>(this.apiUrl + '/products', {params: {'sort': sort}});
  }
}

