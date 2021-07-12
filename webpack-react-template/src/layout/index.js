import React from 'react'
import Main from './Main'
import Login from '../pages/login'

import { http } from 'js-common-library'

console.log(http)
function Index() {
  const { pathname } = window.location
  return pathname === '/login' ? (
    <Login></Login>
  ) : (
    <Main></Main>
  )
}

export default Index
