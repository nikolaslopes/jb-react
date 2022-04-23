import axios from 'axios';
import { Box, Button, Text } from 'grommet';
import { Add, Subtract, Clock } from 'grommet-icons';
import { useQueryClient, useMutation } from 'react-query';
import { IProduct } from '../../interfaces/IProduct';
import { IProductsState } from '../../interfaces/IProductsState';
import { ProductStockProps } from './types/ProductStockProps';

async function updateProduct(product: IProduct) {
  const request = await axios.put(
    `http://localhost:3333/products/${product.id}`,
    product
  );

  return request.data;
}
export function ProductStock({ product, queryKey }: ProductStockProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateProduct, {
    onMutate: async (updateProduct) => {
      // * cancelar qualquer query que esteja acontencendo
      await queryClient.cancelQueries(queryKey);

      // * pegar o cache anterior
      const previousState = queryClient.getQueryData(queryKey);

      // * atualizar o cache com o novo produto
      queryClient.setQueryData<IProductsState>(queryKey, (oldState) => {
        const newItems = oldState?.items.map((product) =>
          product.id === updateProduct.id ? updateProduct : product
        );

        return { total: oldState?.total, items: newItems ?? [] };
      });

      // * retornar daqui de dentro o estado antigo
      return { previousState };
    },
    onError: async (err, variables, context: any) => {
      // * se der erro, eu volto o cache para o estado antigo
      queryClient.setQueryData(queryKey, context?.previousState);
    },
    onSettled: async () => {
      // * vai cair aqui, se der sucesso OU erro
      // * forçar uma revalidação do request
      // * pedir para o server o dado fresco
      queryClient.invalidateQueries(queryKey);
    },
  });

  function increment() {
    mutation.mutate({
      ...product,
      stock: product.stock + 1,
    });
  }
  function decrement() {
    mutation.mutate({
      ...product,
      stock: product.stock - 1,
    });
  }

  return (
    <Box direction="row" align="center">
      {mutation.isLoading ? <Clock size="small" /> : null}
      <Text>{product.stock}</Text>
      <Button size="small" icon={<Add size="small" />} onClick={increment} />
      <Button
        size="small"
        icon={<Subtract size="small" />}
        onClick={decrement}
      />
    </Box>
  );
}
