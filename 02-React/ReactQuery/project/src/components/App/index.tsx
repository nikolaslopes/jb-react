import { Grommet, Heading } from 'grommet';
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';
import { Layout } from '../Layout/index';
import { ProductsTable } from '../../pages/ProductsTable';

import './styles.scss';

export function App() {
  return (
    <BrowserRouter>
      <Grommet plain>
        <Layout>
          <RoutesWrapper>
            <Route path="/" element={<Heading>Bem vindo!</Heading>} />
            <Route path="/products" element={<ProductsTable />} />
            <Route path="/products/:id" element={<h1>Products detail</h1>} />
          </RoutesWrapper>
        </Layout>
      </Grommet>
    </BrowserRouter>
  );
}
