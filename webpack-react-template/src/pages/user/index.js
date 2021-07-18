import { Link, useHistory } from 'react-router-dom'
export default function Index(props) {
  const history = useHistory()
  setTimeout(() => {
    history.replace('/login')
  }, 1000)
  return (
    <div>
      <h1>用户列表</h1>
      <Link to='/user/list/123'>用户详情</Link>
    </div>
  )
}
