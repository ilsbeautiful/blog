import {request} from "./request"

export function getdata() {
  return request({
    url: '/getdata'
  })
}

//getmusic
export function getmusics(id) {
  return request({
    url: '/getmusic',
    method: 'get',
    params: {
      id
    }
  })
}

//查询likeme
export function getlikeme() {
  return request({
    url: '/getlikeme'
  })
}

export function likeme(like_num) {
  return request({
    url: '/likeme',
    method: 'get',
    params: {
      like_num
    }
  })
}

//注册signup
export function signup(data) {
  return request({
    url: '/signup',
    data:data
  })
}

//登录signin
export function signin(data) {
  return request({
    url: '/signin',
    data:data
  })
}

//getuser
export function getuser(data) {
  return request({
    url: '/getuser',
    data:data
  })
}

//发布publish
export function publish(data) {
  return request({
    url: '/publish',
    data:data
  })
}

//查询最近五条recent
export function recent() {
  return request({
    url: '/recent'
  })
}
//getmessage
export function getmessage() {
  return request({
    url: '/getmessage'
  })
}
//发布message
export function message(data) {
  return request({
    url: '/message',
    data:data
  })
}
//getdetail
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    },
    method: 'get'
  })
}

//insimg
export function insimg(data) {
  return request({
    url: '/insimg',
    data: data
  })
}




// Mock.mock('/home/test', 'get', data)
// Mock.setup({
//   timeout: 400
// })



// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

// let totalNums = []

// const nums1 = [20, 11, 222]
// const nums2 = [111, 22, 333]

// for (let n of nums1) {
//   totalNums.push(n)
// }

// totalNums.push(...nums1)
