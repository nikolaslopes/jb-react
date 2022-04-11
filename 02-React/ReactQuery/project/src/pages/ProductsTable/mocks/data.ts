import { IProductState } from '../../../interfaces/IProductState';

export const data: IProductState = {
  total: 30,
  items: [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsa aliquid cumque repellat, voluptatum non eos placeat! Ullam in eius beatae vel, voluptatem, sint corrupti officiis perferendis aspernatur, deleniti voluptates',
      category: 'Category 1',
      image:
        'https://images.unsplash.com/photo-1589170781884-b8b8d8f8e8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      rating: {
        rate: 4.5,
        count: 10,
      },
      stock: 10,
    },
  ],
};
