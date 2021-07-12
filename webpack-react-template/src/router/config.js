import React from 'react'

const User = React.lazy(() => import('../pages/user'))
const UserDetails = React.lazy(() => import('../pages/user/details'))
const OrderList = React.lazy(() => import('../pages/order'))
const OrderHitory = React.lazy(() => import('../pages/order/history'))

const RouterMap = [
  { path: '/user/list', component: User },
  { path: '/user/list/:id', component: UserDetails },
  { path: '/order/list', component: OrderList },
  { path: '/order/history', component: OrderHitory },
]

export default RouterMap
