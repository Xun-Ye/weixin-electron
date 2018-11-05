import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Weixin',
      component: require('@/components/Weixin').default
    },
    {
      path: '/info',
      name: 'Infoedit',
      component: require('@/components/Infoedit').default
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/components/Login').default
    },
    {
      path: '/regist',
      name: 'Regist',
      component: require('@/components/Regist').default
    }
  ]
})