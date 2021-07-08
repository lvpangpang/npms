import React, { useEffect, useState } from 'react'
import { Router } from 'react-router-dom'
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

import history from '../router/history'
import RouterView from '../router'
import User from './user'
import style from './index.less'

import DATA from './data'

const { SubMenu, Item } = Menu
const { menus } = DATA

function App() {
  const [one, setOne] = useState(localStorage.getItem('one'))
  const [menu, setMenu] = useState([])

  useEffect(() => {
    localStorage.setItem('one', one)
    const temp = menus.filter((item) => {
      return item.id == one
    })
    setMenu(temp[0]?.children)
  }, [one])

  return (
    <Router history={history}>
      <div className={style.layout}>
        <div className={style.menu}>
          <div className={style.title}>XX管理系统</div>
          <Menu
            mode="inline"
            defaultSelectedKeys={[localStorage.getItem('three')]}
            defaultOpenKeys={[localStorage.getItem('two')]}
          >
            {menu?.length > 0 &&
              menu.map((item) => {
                return (
                  <SubMenu key={item.id} icon={<AppstoreOutlined />} title={item.title}>
                    {item?.children?.map((item1) => {
                      return (
                        <Item
                          key={item1.id}
                          onClick={() => {
                            let obj = item1
                            obj.parId = item1.id
                            localStorage.setItem('two', item.id)
                            localStorage.setItem('three', item1.id)
                            history.push(item1.path)
                          }}
                        >
                          {item1.title}
                        </Item>
                      )
                    })}
                  </SubMenu>
                )
              })}
          </Menu>
        </div>
        <div className={style.main}>
          <div className={style.header}>
            <div className={style.header_list}>
              <Menu
                defaultSelectedKeys={[one]}
                mode="horizontal"
                theme="dark"
                className={style.header_item}
                onClick={(e) => {
                  setOne(e.key)
                }}
              >
                {menus.map((item) => {
                  return <Item key={item.id}>{item.title}</Item>
                })}
              </Menu>
            </div>
            <div className={style.user}>
              <User></User>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.view}>
              <RouterView></RouterView>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
