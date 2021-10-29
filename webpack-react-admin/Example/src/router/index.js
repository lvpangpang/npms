import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from './history'

// 这里如果引用的是远程资源就可以实现切换路由时候加载的是远程资源
const Home = React.lazy(() => import('../pages/home'))
const Detail = React.lazy(() => import('../pages/detail'))
const List = React.lazy(() => import('../pages/list'))

export default function Index() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/list" component={List} />
        </Switch>
      </Suspense>
    </Router>
  )
}
