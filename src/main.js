// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
/**
 * axios
 */
import axios from 'axios'
Vue.prototype.$http = axios
/**
 * 富文本编辑器
 */
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)
/**
静态资源
 */
import './assets/js/rem.js'
import './assets/css/common.css'
import './assets/css/head.css'
import './assets/css/index.css'

Vue.config.productionTip = false
Vue.component('my-component',{
    template: '#myComponent'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
