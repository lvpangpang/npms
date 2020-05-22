import React, { Suspense } from 'react';
import { BrowserRouter, Route,  Switch, Redirect } from 'react-router-dom';

const Index = React.lazy(() => import('@/index/index'));
const List = React.lazy(() => import('@/list/index'));

export default () => {
  return <>
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Index} />
          <Route path='/list' component={List} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  </>
}