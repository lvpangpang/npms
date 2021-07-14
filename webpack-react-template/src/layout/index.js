import React from 'react'
import RouterView from '../router'

import { http } from 'js-common-library'

http({
  url: 'https://mars-boss.lingxichuxing.com/v1/boss/es/orders'
})

function Index() {
  return <RouterView></RouterView>
}

export default Index
