import { IProduct } from '../../../interfaces/IProduct';

export const data: IProduct = {
  id: 1,
  title: 'Product 1',
  price: 100,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  category: 'Category 1',
  image:
    'https://farmaciaindiana.vteximg.com.br/arquivos/ids/205688/7892840253745_0.jpg?v=636746977557500000',
  rating: {
    rate: 4.5,
    count: 10,
  },
  stock: 10,
};
