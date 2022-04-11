import { IProduct } from '../../../interfaces/IProduct';

export interface IProductState {
  total?: number;
  items: Array<IProduct>;
}
