/****
 * http配置
 */
//引入axios以及ui中的loading和Message组件

import axios from 'axios'
import {
  Spin,
  Message
} from 'iview'


axios.defaults.timeout = 5000

//http请求拦截器
axios.interceptors.request.use(config => {
  Spin.show()
  return config
}, error => {
  Spin.hide()
  Message.error({
    content: '加载超时'
  })
  return Promise.reject(error)
})

//http响应拦截器
axios.interceptors.response.use(data => { //响应成功关闭loading
  Spin.hide()
  return data
}, error => {
  Spin.hide()
  switch (error.response.status) {
    case 401:
      Message.error({
        content: '没有权限'
      })
      break;
    case 404:
      Message.error({
        content: '页面找不到了'
      })
      break;
    case 500:
      Message.error({
        content: '服务器连接超时'
      })
      break;
    default:
      Message.error({
        content: '未知错误'
      })
  }
  return Promise.reject(error)
})
export default axios
