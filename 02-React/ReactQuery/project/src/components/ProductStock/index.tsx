import { Box, Text } from 'grommet';
import { ProductStockProps } from './types/ProductStockProps';

export function ProductStock({ product }: ProductStockProps) {
  const isLoading = false;

  function increment() {}
  function decrement() {}

  return (
    <Box>
      <Text>{product.stock}</Text>
    </Box>
  );
}
