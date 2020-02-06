import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from 'pages/Main'
import NotFound from 'pages/NotFound'
const Secondary = React.lazy(() => import(/* webpackChunkName: "Secondary" */ 'pages/Secondary'))


export function makeurl(base, path) {
  return base.charAt(base.length - 1) === '/'
    ? `${base.slice(0, -1)}${path}`
    : `${base}${path}`
}


const Routes = () => (
  <Router>
    <Switch>
      <Route
        render={(props) => (props.location.state && props.location.state.is404
          ? <NotFound {...props} />
          : AppRoutes()
        )}
      />
    </Switch>
  </Router>
)

const AppRoutes = () => (
  <React.Suspense fallback={<div>loading ...</div>}>
    <Switch>
      <Route exact path="/" render={props => <Main {...props} />} />
      <Route exact path="/secondary" render={props => <Secondary {...props} />} />

      <Route component={NotFound.Redirect} />
    </Switch>
  </React.Suspense>
)

export default hot(Routes)
