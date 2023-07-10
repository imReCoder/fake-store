import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from 'src/shared/shared.module';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, SharedModule],
  providers: [CartService],
})
export class CartsModule {}
