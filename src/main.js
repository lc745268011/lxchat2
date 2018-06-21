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
静态资源
 */
import './assets/js/rem.js'
import './assets/css/common.css'
import './assets/css/head.css'
import './assets/css/index.css'

Vue.config.productionTip = false
/* Vue.component('item',{
       template: '<li>\n' +
       '        <div>\n' +
       '            {{ treelist.name }}\n' +
       '        </div>\n' +
       '        <ul>\n' +
       '            <item v-for="(treelist, index) in treelist.children">\n' +
       '            </item>\n' +
       '        </ul>\n' +
       '        </li>',
   });*/
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
