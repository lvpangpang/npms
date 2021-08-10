import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))

export default function Index() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}