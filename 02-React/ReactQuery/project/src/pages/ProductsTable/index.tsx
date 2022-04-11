import { Box, Heading, Spinner } from 'grommet';

import { LoadingComponent } from '../../components/Loader';

export function ProductsTable() {
  return (
    <Box pad="medium">
      <Heading>Lista de Produtos</Heading>
      <LoadingComponent isLoading={true} />
    </Box>
  );
}
