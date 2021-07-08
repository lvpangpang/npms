import React from 'react'
import Main from './Main'
import Login from '../pages/login'

function Index() {
  const { pathname } = window.location
  return pathname === '/login' ? (
    <Login></Login>
  ) : (
    <Main></Main>
  )
}

export default Index
