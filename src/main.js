// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs';
import base from './base'

import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Icon from 'vue-svg-icon/Icon.vue';

Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(base)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$qs = qs;
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
  created() {
    //判断是否有本地存储中是否有isLogin，并更新vuex仓库
    console.log("ddddffffdd:" + this.getToken('isLogin'))
    console.log("dddddd:" + this.getToken('deadline'))
    if (this.getToken('isLogin') == null) {
      this.setToken('isLogin', '');
    }
    if (this.getToken('deadline') == null) {
      this.setToken('deadline', '0');
    }
    // 一个小时过期
    if (new Date().getTime() - parseInt(this.getToken('deadline')) > 3600 * 1000) {
      this.setToken('isLogin', '');
    }

    console.log("bbbbbb:" + parseInt(this.getToken('deadline')))
    console.log("ccccc:" + new Date().getTime())
    console.log("aaaaaa:" + (new Date().getTime() -parseInt(this.getToken('deadline'))))
    this.$store.state.isLogin = this.getToken('isLogin');
    this.$store.state.deadline = this.getToken('deadline');
    console.log(this.$store.state.isLogin)
  }
})
