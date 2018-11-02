import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: '',
    userId: '',
    tabNum: '1'
  },
  mutations: {
    login(state, payload) {
      state.isLogin = payload.msg;
      state.userId = payload.userid;
      if (window.localStorage) {
        localStorage.setItem('isLogin', payload.msg);
        localStorage.setItem('deadline', payload.time);
        localStorage.setItem('userId', payload.userid);
      } else {
        alert('This browser does NOT support localStorage');
      }

    },
    tab(state, payload) {
      state.tabNum = payload.num;
      if (window.localStorage) {
        localStorage.setItem('tabNum', payload.num)
      } else {
        alert('This browser does NOT support localStorage');
      }
    }
  }
})

export default store
