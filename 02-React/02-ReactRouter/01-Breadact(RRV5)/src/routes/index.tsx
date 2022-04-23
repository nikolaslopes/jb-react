import { Switch, Route, Redirect } from 'react-router-dom'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/production" />
      </Route>

      <Route path="/production">Produção</Route>

      <Route path="/stock">Estoque</Route>
    </Switch>
  )
}
