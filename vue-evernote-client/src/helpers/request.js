import axios from 'axios'
import configBaseUrl from './config-baseURL'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode'
axios.defaults.baseURL = configBaseUrl.baseURL
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    axios(option).then(res => {
      if(res.status === 200) {
        resolve(res.data)
      }else {
        Message.error(res.data.msg);
        reject(res.data)
        console.log(res)
      }
    }).catch(err => {
      // 请求压根没有成功 才会报网络错误
      console.log('hahaha~')
      Message.error('网络异常');
      reject({msg: '网络异常'})
    })
  })
}
