import React, { Suspense } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from './history';

const Home = React.lazy(() => import('@/pages/home'));
const Detail = React.lazy(() => import('@/pages/detail'));

export default function Index() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail' component={Detail} />
        </Switch>
      </Suspense>
    </Router>
  );
}