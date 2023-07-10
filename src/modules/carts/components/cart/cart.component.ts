import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../interfaces/cart-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carItems$;
  constructor(public cartService: CartService, private router: Router) {
    this.carItems$ = cartService.cartItem;
    this.carItems$.subscribe((d) => {
      console.log(d);
    });
  }

  ngOnInit(): void {}

  openProduct(id: number = 0) {
    if (id == 0) return;
    this.router.navigateByUrl(`/products/${id}`);
  }

  increaseQuantity(id?: number) {
    this.cartService.increaseQuantity(id as number);
  }

  decreaseQuantity(id?: number) {
    this.cartService.decreaseQuantity(id as number);
  }

  removeItem(id?: number) {
    this.cartService.removeItemFromCart(id as number);
  }
}
