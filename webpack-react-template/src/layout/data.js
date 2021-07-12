const data = {
  id: 100,
  username: 'lvdaofeng',
  roleNameDisplays: ['ABC'],
  roleNames: ['yzAAZSVa'],
  phone: '15757135988',
  userType: 1,
  userTypeShow: '平台用户',
  menus: [
    {
      id: 4,
      title: '用户中心',
      path: '/#',
      children: [
        {
          id: 27,
          title: '用户管理',
          path: '/#',
          children: [{ id: 28, title: '用户列表', path: '/user/list', children: null }],
        },
      ],
    },
    {
      id: 2,
      title: '订单中心',
      path: '/#',
      children: [
        {
          id: 8,
          title: '订单管理',
          path: '/#',
          children: [{ id: 9, title: '订单列表', path: '/order/list', children: null }],
        },
        {
          id: 112,
          title: '历史订单',
          path: '/#',
          children: [{ id: 113, title: '历史订单', path: '/order/history', children: null }],
        },
      ],
    },
  ],
}

export default data
