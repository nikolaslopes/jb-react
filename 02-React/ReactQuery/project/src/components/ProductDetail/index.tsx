import { Box, Button, Heading, Image, Text } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from './mocks/data';
import { LoadingComponent } from '../Loader';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  if (!data) {
    return <LoadingComponent isLoading />;
  }

  return (
    <Box align="center" pad="xsmall">
      <Heading level={2}>Detalhe do Produto #{id}</Heading>
      <Box
        width="large"
        background="light-1"
        round="xsmall"
        elevation="small"
        pad="medium"
        align="center"
      >
        <Box height="small" width="small">
          <Image fit="cover" src={data.image} />
        </Box>

        <Box gap="small">
          <Text>
            <strong>ID:</strong>
            {data.id}
          </Text>
          <Text>
            <strong>Title:</strong>
            {data.title}
          </Text>
          <Text>
            <strong>Price:</strong>
            {data.price}
          </Text>
          <Text>
            <strong>Description:</strong>
            {data.description}
          </Text>
          <Text>
            <strong>Category:</strong>
            {data.category}
          </Text>
        </Box>
      </Box>
      <Button
        className="button-brand"
        margin="23px"
        secondary
        label="Back"
        onClick={() => navigate(-1)}
      />
    </Box>
  );
}
