import React from 'react'
import { Toast } from 'antd-mobile'
import Router from './router'

import http from './untils/http'

http.setConfig({
  baseURL: 'https://api.juejin.cn',
  timeout: 10000,
  headers: {
    token: 'abc',
    abc: '3'
  },
  transformResult: (result) => {
    // result为业务data
    const { code, msg, data } = result
    if (code === 200) {
      return data
    } else {
      Toast.fail(msg)
      return Promise.reject(result)
    }
  },
  error: (err) => {
    Toast.fail(err.message || '请求异常')
  },
})

function App() {
  return <Router></Router>
}

export default App
