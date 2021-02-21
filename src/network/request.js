import axios from "axios";
export function  request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    //拦截请求之后要把请求返回去
    return config
  }, err => {
    return err
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
    return err
  })

  //发送真正的网络请求
  return instance(config)
}
