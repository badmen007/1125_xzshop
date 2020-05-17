/*
ajax请求模块  返回值：promise对象（一部返回的数据是response.data)
*/
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET'){

  return new Promise(function (reslove, reject){
    let promise
    if (type ==='GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key +'=' +data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(function(respone){
      reslove(response.data)
    }).catch(function(error){
      reject(error)
    })
  })
}