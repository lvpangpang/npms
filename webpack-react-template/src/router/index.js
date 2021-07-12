import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import RouterMap from './config'

export default function Index() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          {
            RouterMap.map((item) => {
              return <Route exact key={item.path} path={item.path}>
                <item.component></item.component>
              </Route>
            })
          }
        </Switch>
      </Suspense>
    </>
  )
}
