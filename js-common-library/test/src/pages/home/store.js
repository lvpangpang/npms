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
        sex: 'null'
      }
    })
    this.list = data
  }
  num = 1
  setNum = () => {
    this.num++
  }
}

export default new HomeStore()
