import { http } from '@sd/utils'

export default {
  getList: (data) => http.get('/example/list', { data, mock: true }),
}
