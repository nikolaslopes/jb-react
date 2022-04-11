import { Box, Heading, Spinner } from 'grommet';

import { LoadingComponent } from '../../components/Loader';

export function ProductsList() {
  return (
    <Box pad="medium">
      <Heading>My Product List</Heading>

      <LoadingComponent isLoading={true} />
    </Box>
  );
}
