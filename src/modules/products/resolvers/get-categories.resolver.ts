import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, catchError, of } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesResolver implements Resolve<string[]> {
constructor(private productService: ProductService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.productService.getCategories().pipe(
      catchError(error => {
        console.log(`problem retriving gategories with error:`, error);
        return of([]);
      })
    );
  }
}
