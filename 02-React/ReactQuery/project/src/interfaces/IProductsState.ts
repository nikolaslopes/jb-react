import { IProduct } from './IProduct';

export interface IProductsState {
  total?: number;
  items: Array<IProduct>;
}
