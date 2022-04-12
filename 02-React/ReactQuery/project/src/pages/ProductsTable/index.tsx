import axios from 'axios';
import {
  Box,
  Button,
  ColumnConfig,
  DataTable,
  Heading,
  Pagination,
} from 'grommet';
import { Star } from 'grommet-icons';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadingComponent } from '../../components/Loader';
import { ProductStock } from '../../components/ProductStock';
import { IProduct } from '../../interfaces/IProduct';
import { IProductsState } from '../../interfaces/IProductsState';

async function fetchProducts(
  page: number,
  perPage: number
): Promise<IProductsState> {
  const request = await axios.get<IProduct[]>(
    `http://localhost:3333/products?_page=${page}&_limit=${perPage}`
  );

  return {
    items: request.data,
    total: Number(request.headers['x-total-count']),
  };
}

const PER_PAGE = 6;
export function ProductsTable() {
  const navigate = useNavigate();
  const location = useLocation();
  const page = Number(new URLSearchParams(location.search).get('page') || '1');

  const queryKey = ['products', page, PER_PAGE];
  const { data, isLoading } = useQuery<IProductsState>(
    queryKey,
    () => fetchProducts(page, PER_PAGE),
    {
      staleTime: 30000,
    }
  );

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
        return <ProductStock product={data} queryKey={queryKey} />;
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
        placeholder={isLoading ? <LoadingComponent isSpinnerLoading /> : null}
      />

      {!isLoading && (
        <Box align="center" pad="large">
          <Pagination
            numberItems={data?.total}
            step={PER_PAGE}
            page={page}
            onChange={({ page }) => {
              navigate(`/products?page=${page}`, { replace: true });
            }}
          />
        </Box>
      )}
    </Box>
  );
}
