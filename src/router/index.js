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
import backstage from '@/views/backstage'
import group from '@/views/group'
import editor from '@/views/editor'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/',           //这个表示的是根目录，即一进入的页面
          redirect:'login'
      },
      {
          path: '/login',
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
      },
      {
          path: '/backstage',
          name: 'backstage',
          component: backstage
      },
      {
          path: '/group',
          name: 'group',
          component: group
      },
      {
          path: '/editor',
          name: 'editor',
          component: editor
      }
  ]
})
