import {
  request
} from "network/request";

export function getHomeData() {
  return request({
    url: '/alimini/default/homegoodsnew'
  })
}
