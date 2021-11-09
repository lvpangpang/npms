import React from 'react'
import { Link } from 'react-router-dom'
import { http } from 'js-common-library'

function Index() {

  React.useEffect(async() => {
    try {
      await http.get('/abc')

    } catch(e) {
      console.log(JSON.stringify(e))
    }
  }, [])

  return (
    <div>
      <h1>用户列表</h1>
      <Link to="/user/list/123">用户详情</Link>
    </div>
  )
}

export default Index
