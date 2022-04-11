import {
  Box,
  Button,
  ColumnConfig,
  DataTable,
  Heading,
  Pagination,
} from 'grommet';
import { Star } from 'grommet-icons';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { LoadingComponent } from '../../components/Loader';
import { ProductStock } from '../../components/ProductStock';
import { IProduct } from '../../interfaces/IProduct';

import { data } from './mocks/data';

const PER_PAGE = 6;
export function ProductsTable() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(new URLSearchParams(searchParams).get('page') || 1);

  console.log(page);

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
        return <ProductStock product={data} />;
      },
    },
    {
      header: '',
      property: 'detail',
      render: (data) => {
        return (
          <Button
            className="button-brand"
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

      {!isLoading && (
        <Box align="center" pad="large">
          <Pagination
            numberItems={data?.total}
            step={PER_PAGE}
            page={page}
            onChange={({ page }) => {
              navigate(`/products?pages=${page}`);
            }}
          />
        </Box>
      )}
    </Box>
  );
}
