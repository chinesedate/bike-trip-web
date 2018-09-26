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
    //判断本地存储中是否有isLogin，并更新vuex仓库
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

    this.$store.state.isLogin = this.getToken('isLogin');
    this.$store.state.deadline = this.getToken('deadline');


    // 判断本地存储中是否有tabNum，并更新vuex仓库
    if (this.getToken('tabNum') == null) {
      this.setToken('tabNum', '1');
    }

    this.$store.state.tabNum = this.getToken('tabNum');
  }
})
