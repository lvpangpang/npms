import React, { Suspense } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from './history';

const Home = React.lazy(() => import('../pages/home'));

export default function Index() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}