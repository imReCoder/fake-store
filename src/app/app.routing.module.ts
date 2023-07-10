import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'src/modules/carts/components/cart/cart.component';
import { AllProductsComponent } from 'src/modules/products/components/all-products/all-products.component';
import { CartsModule } from 'src/modules/carts/carts.module';
import { ProductsModule } from 'src/modules/products/products.module';
import { PageNotFoundComponent } from 'src/shared/components/PageNotFound/PageNotFound.component';
import { GetCategoriesResolver } from 'src/modules/products/resolvers/get-categories.resolver';
import { ProductsDetailsComponent } from 'src/modules/products/components/products-details/products-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    component: AllProductsComponent,
    resolve: { AllCategories: GetCategoriesResolver },
  },
  {
    path: 'products/:id',
    component: ProductsDetailsComponent,
  },
  { path: 'carts', component: CartComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    ProductsModule,
    CartsModule,
  ]
})
export class AppRoutingModule { }
