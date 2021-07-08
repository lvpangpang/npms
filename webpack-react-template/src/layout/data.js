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
      id: 2,
      title: 'AA管理',
      path: '/#',
      children: [
        {
          id: 8,
          title: 'AA管理',
          path: '/enterprise/user',
          children: [
            { id: 9, title: 'AA列表', path: '/customer/work-list', children: null },
            { id: 116, title: 'AA查询', path: '/customer/work-search', children: null },
            { id: 115, title: '我的AA', path: '/customer/my-work', children: null },
          ],
        },
        {
          id: 112,
          title: 'AA配置',
          path: '/#',
          children: [
            { id: 113, title: 'AA配置', path: '/customer/preset-reply', children: null },
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'BB管理',
      path: '/#',
      children: [
        {
          id: 27,
          title: 'BB管理',
          path: '/#',
          children: [
            { id: 28, title: 'BB列表', path: '/platform/operation', children: null },
          ],
        },
        {
          id: 29,
          title: 'B管理',
          path: '/#',
          children: [
            { id: 30, title: 'BBBB列表', path: '/platform/role', children: null },
            { id: 31, title: 'CCCC列表', path: '/platform/user', children: null },
          ],
        },
      ],
    },
  ]
}

export default data
