import { Box, Spinner } from 'grommet';
import { LoaderProps } from './types/LoaderProps';

export function LoadingComponent({ isSpinnerLoading }: LoaderProps) {
  if (!isSpinnerLoading) return null;

  return (
    <Box
      align="center"
      justify="center"
      fill="vertical"
      animation="fadeIn"
      background="light-2"
      height={{ min: '200px' }}
    >
      <Spinner size="medium" />
    </Box>
  );
}
