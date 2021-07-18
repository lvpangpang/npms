import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterView from '../router'

import { http } from 'js-common-library'

http({
  url: 'https://mars-boss.lingxichuxing.com/v1/boss/es/orders'
})

function Index() {
  return <BrowserRouter><RouterView></RouterView></BrowserRouter>
}

export default Index
