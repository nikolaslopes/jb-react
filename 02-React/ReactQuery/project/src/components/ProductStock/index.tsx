import { Box, Button, Text } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import { ProductStockProps } from './types/ProductStockProps';

export function ProductStock({ product }: ProductStockProps) {
  const isLoading = false;

  function increment() {}
  function decrement() {}

  return (
    <Box direction="row" align="center">
      <Text>{product.stock}</Text>
      <Button size="small" icon={<Add size="smal" />} onClick={increment} />
      <Button size="small" icon={<Subtract size="small" />} />
    </Box>
  );
}
