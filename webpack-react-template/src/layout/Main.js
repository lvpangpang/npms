import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Menu, Breadcrumb } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

import User from './user'
import style from './index.less'

import DATA from './data'

const { SubMenu, Item } = Menu
const BreadcrumbItem = Breadcrumb.Item
const { menus } = DATA

function App({ children }) {
  const history = useHistory()
  const [path, setPath] = useState([])
  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  const [three, setThree] = useState()
  const [menu, setMenu] = useState([])

  const pathChange = (pathname) => {
    let isMatch = false
    menus.forEach((item1) => {
      item1.children.forEach((item2) => {
        item2.children.forEach((item3) => {
          if (pathname.includes(item3.path)) {
            isMatch = true
            setPath([item1.title, item2.title, item3.title])
            setMenu(item1?.children)
            setOne(item1.id)
            setTwo(item2.id)
            setThree(item3.id)
          }
        })
      })
    })
    if (!isMatch) {
      setPath([])
      setMenu([])
      setOne(null)
      setTwo(null)
      setThree(null)
    }
  }

  useEffect(() => {
    pathChange(window.location.pathname)
    // 监听路由变化
    history.listen((location) => {
      console.log(location)
      const { pathname } = location
      pathChange(pathname)
    })
  }, [])

  const token = localStorage.getItem('token')
  if (!token) {
    return <Redirect to="/login"></Redirect>
  }

  return (
    <div className={style.layout}>
      <div className={style.menu}>
        <div className={style.title}>火腿管理系统</div>
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
            <div className={style.breadcrumb}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">主页</Link>
                </BreadcrumbItem>
                {path.map((item) => {
                  return <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
                })}
              </Breadcrumb>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
