import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { IproductDTO } from '../../Interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/modules/carts/services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  product?: IproductDTO;
  productId: string | null = null;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct(this.productId).subscribe((data) => {
      if (data) {
        this.product = data;
      }
    });
  }

  addToCart(product: IproductDTO) {
    this.cartService.addItemToCart(product);
  }

  generateArray = (len: number = 1) =>
    Array.from({ length: len }, (_, index) => index + 1);
}
