import { Switch, Route, Redirect } from 'react-router-dom'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/production" />
      </Route>

      <Route exact path="/production">
        Produção
      </Route>

      <Route exact path="/stock">
        Estoque
      </Route>
    </Switch>
  )
}
