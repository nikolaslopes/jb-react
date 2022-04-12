import { IProduct } from '../../../interfaces/IProduct';

export type ProductStockProps = {
  product: IProduct;
  queryKey: Array<string | number>;
};
