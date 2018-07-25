import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state:{
    isLogin:""
  },
  mutations:{
    isLogin(state, msg) {
      state.isLogin = msg;
    }
  }
})

export default store
