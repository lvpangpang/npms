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
  const { pathname } = window.location
  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  const [three, setThree] = useState()
  const [menu, setMenu] = useState([])

  useEffect(() => {
    menus.forEach((item) => {
      item.children.forEach((item1) => {
        item1.children.forEach((item2) => {
          if (item2.path === pathname) {
            setMenu(item?.children)
            setOne(item.id)
            setTwo(item1.id)
            setThree(item2.id)
          }
        })
      })
    })
  }, [])

  return (
    <Router history={history}>
      <div className={style.layout}>
        <div className={style.menu}>
          <div className={style.title}>XX管理系统</div>
          <Menu mode="inline" openKeys={[two + '']} selectedKeys={[three + '']}>
            {menu?.length > 0 &&
              menu.map((item) => {
                return (
                  <SubMenu
                    key={item.id}
                    icon={<AppstoreOutlined />}
                    title={item.title}
                    onTitleClick={() => {
                      setTwo(item.id)
                    }}
                  >
                    {item?.children?.map((item1) => {
                      return (
                        <Item
                          key={item1.id}
                          onClick={() => {
                            setThree(item1.id)
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
                selectedKeys={[one + '']}
                mode="horizontal"
                theme="dark"
                className={style.header_item}
                onClick={(e) => {
                  const { key } = e
                  setOne(key)
                  const temp = menus.filter((item) => {
                    return item.id == key
                  })
                  setMenu(temp[0]?.children)
                  setTwo(temp[0]?.children[0]?.id)
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
