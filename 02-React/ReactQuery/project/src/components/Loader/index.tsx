import { Box, Spinner } from 'grommet';
import { LoaderProps } from './types/LoaderProps';

export function LoadingComponent({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <Box
      align="center"
      justify="center"
      fill="vertical"
      animation="fadeIn"
      background="light-4"
      height={{ min: '200px' }}
    >
      <Spinner size="medium" />
    </Box>
  );
}
