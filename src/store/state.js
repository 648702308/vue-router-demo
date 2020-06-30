import {getCookieValue} from '@/api/methodApi'

export default {

  isMobile: false,
  //屏幕宽度
  screenWidth: document.documentElement.clientWidth, //屏幕宽度
  screenHeight: document.documentElement.clientHeight, //屏幕高度

  loginInfo: {
    name: getCookieValue('name') || '',
    token: getCookieValue('token') || '',
    head_img: getCookieValue("head_img"),
    id: getCookieValue("id"),
    telphone: getCookieValue("telphone"),
    type: getCookieValue("type")
  },
  transitionName:'slide-none'
}
