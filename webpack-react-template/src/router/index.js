import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/index'))

export default function Index() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </>
  )
}
