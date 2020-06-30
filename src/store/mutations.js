import {setCookie} from '@/api/methodApi'

export default {
  //这里是set方法
  setLoginInfo(state, data) {
    state.loginInfo.name = data.name;
    state.loginInfo.token = data.token;
    state.loginInfo.head_img = data.head_img;
    state.loginInfo.id = data.user_id;
    state.loginInfo.telphone = data.telphone;
    state.loginInfo.type = data.type;

    for (let i in data) {
      setCookie(i, data[i], 7, "/");
    }
  },
  changeTransition (state, transitionName) {
    state.transitionName = transitionName
  }
}
