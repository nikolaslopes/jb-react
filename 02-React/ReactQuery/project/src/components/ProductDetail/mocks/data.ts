import { IProduct } from '../../../interfaces/IProduct';

export const data: IProduct = {
  id: 1,
  title: 'Product 1',
  price: 100,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  category: 'Category 1',
  image:
    'https://images.unsplash.com/photo-1589170781884-b8b8d8f8e8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  rating: {
    rate: 4.5,
    count: 10,
  },
  stock: 10,
};
