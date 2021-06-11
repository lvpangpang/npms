import { useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

function myButton({ to, type, onClick, auth, ...rest }) {
  const [loading, setLoading] = useState(false)

  const but = (
    <Button loading={loading} type={type} {...rest} onClick={to ? undefined : handleClick} />
  )
  return to ? <Link to={to}>{but}</Link> : but
}
export default myButton
