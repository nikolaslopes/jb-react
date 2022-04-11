import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';

import './styles.scss';

export function App() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<h1>Bem vindo!</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/products/:id" element={<h1>Products detail</h1>} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}
