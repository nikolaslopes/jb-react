import { Box, Heading } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from './mocks/data';
import { LoadingComponent } from '../Loader';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  console.log(data);

  if (!data) {
    return <LoadingComponent isLoading />;
  }

  return (
    <Box align="center" pad="xsmall">
      <Heading>Detalhe do Produto #{id}</Heading>
      <Box width="large" background="light-4" round="xsmall">
        {/* <Box><Image src={data.image} /></Box> */}
      </Box>
    </Box>
  );
}
