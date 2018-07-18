import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'
import login1 from '@/views/login1'
import setting from '@/views/setting'
import contacts from '@/views/contacts'
import industry from '@/views/industry'
import dapp from '@/views/dapp'
import regisiter from '@/views/regisiter'
import forget from '@/views/forget'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'login',
          component: login
      },
      {
          path: '/index',
          name: 'index',
          component: index
      },
      {
          path: '/setting',
          name: 'setting',
          component: setting
      },
      {
          path: '/login1',
          name: 'login1',
          component: login1
      },
      {
          path: '/contacts',
          name: 'contacts',
          component: contacts
      },
      {
          path: '/industry',
          name: 'industry',
          component: industry
      },
      {
          path: '/dapp',
          name: 'dapp',
          component: dapp
      },
      {
          path: '/regisiter',
          name: 'regisiter',
          component: regisiter
      },
      {
          path: '/forget',
          name: 'forget',
          component: forget
      }
  ]
})
