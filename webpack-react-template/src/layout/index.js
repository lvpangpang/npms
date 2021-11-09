import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import View from '../router'

import { http } from 'js-common-library'

http.defaults.timeout = 5000
http.setConfig({
  baseURL: 'https://www.api.com',
  headers: {
    contextId: 'abc',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJib3NzX2F1dGhfaXNzdWVyIiwiY29udGV4dElkIjoicG1zIiwiZXhwIjoxNjM0MTM4ODQxLCJ1c2VySWQiOjY1fQ.upPeT0OknNQe2L1Hi136lHwSfgFtMSRwWQMhPKlY5',
  },
  transformResult(result) {
    const { code, data, msg } = result || {}
    // 正常业务数据
    if (code === 200) {
      return data
    }
    // 非正常业务情况提示错误msg
    // alert(msg)
    // 暴露出错误信息，有些特殊业务场景需要判断不同的错误码做对应的处理
    return Promise.reject(result)
  },
  error(e) {
    console.log('错误：' + e)
  },
})
function Index() {
  return (
    <BrowserRouter>
      <View></View>
    </BrowserRouter>
  )
}

export default Index
