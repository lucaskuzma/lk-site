import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/web',
      component: Portfolio,
      props: { section: 'web' }
    },
    {
      path: '/mobile',
      component: Portfolio,
      props: { section: 'mobile' }
    }
  ]
})
