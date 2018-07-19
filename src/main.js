// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import { Dialog,Transfer,Button,Input,MessageBox } from 'element-ui';
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
/**
 * ele-ui
 */
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Input);
const components = [
        Transfer
];
components.map(component => {
    Vue.component(component.name, component);
});
Vue.prototype.$confirm = MessageBox.confirm;



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
