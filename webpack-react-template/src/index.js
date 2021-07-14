import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './layout'

function Index() {
  return <BrowserRouter><App></App></BrowserRouter>
}

ReactDOM.render(<Index />, document.querySelector('#root'))
