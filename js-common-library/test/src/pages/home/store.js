import { makeAutoObservable } from 'mobx'
import http from '../../untils/http'

class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }

  list = []
  getList = async () => {
    const data = http({
      url: '/user_api/v1/author/recommend',
      params: {
        name: '呂肥肥',
        key: '',
        age: undefined,
        sex: 'null',
      },
    })
    this.list = data
  }

  num = 1
  setNum = () => {
    this.num++
  }

  login = async () => {
    try {
      const data = await http({
        baseURL: '',
        method: 'post',
        url: 'https://mars-boss.lingxichuxing.com/v1/boss/login',
        data: {
          phone: '15757135989',
          verifyCode: '123456',
        },
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default new HomeStore()
