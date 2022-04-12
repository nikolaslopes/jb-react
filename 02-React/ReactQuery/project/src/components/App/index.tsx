import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Grommet, Heading } from 'grommet';

import { Layout } from '../Layout/index';
import { ProductsTable } from '../../pages/ProductsTable';
import { ProductDetail } from '../ProductDetail';
import { client } from './client';
import './styles.scss';

export function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Grommet plain>
          <Layout>
            <RoutesWrapper>
              <Route path="/" element={<Heading>Bem vindo!</Heading>} />
              <Route path="/products" element={<ProductsTable />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </RoutesWrapper>
          </Layout>
        </Grommet>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
