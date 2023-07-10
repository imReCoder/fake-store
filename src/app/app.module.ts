import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CartService } from 'src/modules/carts/services/cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, SharedModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
