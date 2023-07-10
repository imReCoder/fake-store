import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IproductDTO } from 'src/modules/products/Interfaces/iproduct';
import { ICartItem } from '../interfaces/cart-item.interface';
import { LocalstorageService } from 'src/shared/services/localstorage.service';

const STORE_KEY = 'CART';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private $cartItems = new BehaviorSubject<ICartItem[]>([]);
  constructor(private ls: LocalstorageService) {
    this.$cartItems.next(this.ls.getItem(STORE_KEY));
  }

  public get cartItem() {
    return this.$cartItems.asObservable();
  }

  public addItemToCart(item: IproductDTO) {
    console.log('adding to cart ', item);
    const index = this.getCartItemIndex(item.id);
    if (index > -1) {
      const currentItems = this.currentItems();
      const existingItem = currentItems[index];
      existingItem.count++;
      this.$cartItems.next([...currentItems]);
    } else {
      this.$cartItems.next([
        ...this.currentItems(),
        { count: 1, product: item },
      ]);
    }

    this.saveCart();
    console.log('cart items ', this.$cartItems.getValue());
  }

  public increaseQuantity(productId: number) {
    const currentItems = this.currentItems();
    const item = currentItems.find((p) => p.product.id == productId);
    if (item) {
      item.count++;
      this.$cartItems.next([...currentItems]);
      this.saveCart();
    }
  }

  public decreaseQuantity(productId: number) {
    const currentItems = this.currentItems();
    const item = currentItems.find((p) => p.product.id == productId);
    if (item && item.count > 1) {
      item.count--;
      this.$cartItems.next([...currentItems]);
      this.saveCart();
    }
  }
  public removeItemFromCart(productId: number) {
    const currentItems = this.$cartItems.getValue();

    const index = currentItems.findIndex((p) => p.product.id == productId);

    // remove product from that index
    currentItems.splice(index, 1);
    this.$cartItems.next(currentItems);
    this.saveCart();
  }

  private currentItems(): ICartItem[] {
    return this.$cartItems.getValue();
  }

  private getCartItemIndex(productId?: number) {
    const currentItems = this.$cartItems.getValue();
    const index = currentItems.findIndex((p) => p.product.id == productId);

    return index;
  }

  private saveCart() {
    this.ls.setItem(STORE_KEY, this.currentItems());
  }
}
