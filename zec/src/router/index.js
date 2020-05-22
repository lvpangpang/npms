import React from 'react';
import { Route,  Switch } from 'react-router-dom';
import Index from '@/index/index.jsx';
import List from '@/List/index.jsx';
import Details from '@/details/index.jsx';
import Order from '@/order/index.jsx';

export default function routerConfig() {
  return (
    <Switch>
      <Route exact path={'/'} component={Index} />
      <Route exact path={'/list'} component={List} />
      <Route exact path={'/details'} component={Details} />
      <Route exact path={'/order'} component={Order} />
    </Switch>
  );
}