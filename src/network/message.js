import {request} from "./request"


//sendmessage
export function sendmsg(data) {
  return request({
    url: '/sendmsg',
    data: data
  })
}

//getmessage
export function getmessage(iid) {
  return request({
    url: '/message',
    method: 'get',
    params: {
      iid
    }
  })
}

//addstar
export function addstar(data) {
  return request({
    url: '/addstar',
    data: data
  })
}

