import {request} from "@/network/request";

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求goods数据
//当前接口地址已更改，所以这里没有请求到数据
export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
