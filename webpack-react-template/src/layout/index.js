import React from 'react'
import Main from './Main'
import Login from '../pages/login'

import { http } from 'js-common-library'

http({
  url: 'https://mars-boss.lingxichuxing.com/v1/boss/es/orders'
})

function Index() {
  const { pathname } = window.location
  return pathname === '/login' ? (
    <Login></Login>
  ) : (
    <Main></Main>
  )
}

export default Index
