// #ifdef MP-WEIXIN
const Fly = require("flyio/dist/npm/wx")
// #endif

// #ifdef MP-ALIPAY
const Fly = require("flyio/dist/npm/ap")
// #endif

// #ifndef MP-WEIXIN || MP-ALIPAY
const Fly = require('flyio/dist/npm/fly')
// #endif

const request = new Fly()

request.interceptors.request.use((request) => {
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    return promise.resolve(response.data)
  },
  (err, promise) => {
    return promise.reject(err)
  }
)
export default request