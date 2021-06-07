import axios from 'axios';
//方法一
// export function request(config, success, fail) {
//   //创建axios实例
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance1(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       fail(err)
//     })
// }
//方法2
// export function request(config) {
//     //创建axios实例
//     const instance1 = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance1(config.info)
//       .then(res => {
//         config.success(res)
//       })
//       .catch(err => {
//         config.fail(err)
//       })
//   }
//方法3
export function request(config) {
  const instance1 = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  //请求拦截器
    instance1.interceptors.request.use(config => {

      return config
    }, err => {
      console.log(err)
    })
  //响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance1(config)
}
