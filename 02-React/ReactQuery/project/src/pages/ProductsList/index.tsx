import { Box, Button, ColumnConfig, DataTable, Heading } from 'grommet';
import { Star } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';

import { LoadingComponent } from '../../components/Loader';
import { ProductStock } from '../../components/ProductStock';
import { IProduct } from '../../interfaces/IProduct';

import { data } from './assets/data';

export function ProductsList() {
  const navigate = useNavigate();

  const isLoading = false;

  const columns: ColumnConfig<IProduct>[] = [
    {
      header: 'Id',
      property: 'id',
    },
    {
      header: 'Title',
      property: 'title',
    },
    {
      header: 'Price',
      property: 'price',
    },
    {
      header: 'Rating',
      property: 'rating',
      render: (data) => {
        const rate = Math.ceil(data.rating.rate);
        const stars = new Array(rate)
          .fill(true)
          .map((value, index) => <Star color="status-warning" key={index} />);

        return <Box direction="row">{stars}</Box>;
      },
    },
    {
      header: 'Stock',
      property: 'stock',
      render: (data) => {
        console.log(data);
        return <ProductStock product={data} />;
      },
    },
    {
      header: '',
      property: 'detail',
      render: (data) => {
        return (
          <Button
            size="small"
            label="Detail"
            onClick={() => navigate(`/products/${data.id}`)}
          />
        );
      },
    },
  ];

  return (
    <Box pad="medium">
      <Heading level={2}>My Product List</Heading>

      <DataTable
        data={data?.items}
        columns={columns}
        placeholder={isLoading ? <LoadingComponent isLoading /> : null}
      />

      <LoadingComponent isLoading={false} />
    </Box>
  );
}
