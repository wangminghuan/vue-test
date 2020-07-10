import axios from "axios";
import qs from "qs";
const Http = axios.create({
  baseURL: '',
})
Http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if(config.method === 'post') {
      let data = qs.parse(config.data)
      config.data =qs.stringify(data)

  } else if(config.method === 'get') {
      config.params = {
          ...config.params
      }
  }
  return config;
  },
  error => {
    // 关闭全局 loading 状态
    Promise.reject(error)
  }
)
export default Http