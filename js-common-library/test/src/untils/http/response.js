import { isFun } from '../data-type'

function response(http) {
  http.interceptors.response.use(
    (res) => {
      console.log(res)
      const { data, config } = res
      const { transformResult } = config
      let result = data
      if (isFun(transformResult)) {
        result = transformResult(data)
      }
      return result
    },
    (err) => {
      const { error } = err.config
      if (isFun(error)) {
        error(err)
      } else {
        console.error(err)
      }
      return Promise.reject(err)
    }
  )
}

export default response
