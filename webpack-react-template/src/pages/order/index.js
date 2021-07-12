import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div>
      <h1>订单列表</h1>
      <div><Link to="/user/list">用户列表</Link></div>
      <div><Link to="/user/list" target="_blank">用户列表</Link></div>
    </div>
  )
}

export default Index
