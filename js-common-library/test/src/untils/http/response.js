import { isFun } from '../data-type'

function response(http) {
  http.interceptors.response.use(
    (res) => {
      const { data, config } = res
      const { transformResult } = config
      let result = data
      if (isFun(transformResult)) {
        result = transformResult(res)
      }
      return res
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default response
