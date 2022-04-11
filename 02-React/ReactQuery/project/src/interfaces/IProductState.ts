import { IProduct } from './IProduct';

export interface IProductState {
  total?: number;
  items: Array<IProduct>;
}
