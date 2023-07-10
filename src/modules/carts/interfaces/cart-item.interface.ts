import { IproductDTO } from 'src/modules/products/Interfaces/iproduct';

export interface ICartItem {
  product: IproductDTO;
  count: number;
}
