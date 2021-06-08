import React from 'react'

import Router from './router'

import http from './untils/http'

http.setConfig({
  baseURL: 'https://api.juejin.cn',
  timeout: 10000,
  headers: {
    token: '12323'
  }
})

function App() {
  return <Router></Router>
}

export default App
