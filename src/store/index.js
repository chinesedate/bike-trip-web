import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state:{
    isLogin:""
  },
  mutations:{
    login(state, payload) {
      state.isLogin = payload.msg;
      if (window.localStorage) {
        localStorage.setItem('isLogin',payload.msg);
        localStorage.setItem('deadline',payload.time);
      } else {
        alert('This browser does NOT support localStorage');
      }

    }
  }
})

export default store
