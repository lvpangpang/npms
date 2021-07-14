import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import RouterMap from './config'
import Login from '../pages/login'
import Main from '../layout/Main'

export default function Index() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Main>
          <Suspense fallback={<></>}>
            {RouterMap.map((item) => {
              return (
                <Route exact key={item.path} path={item.path}>
                  <item.component></item.component>
                </Route>
              )
            })}
          </Suspense>
        </Main>
      </Switch>
    </>
  )
}
