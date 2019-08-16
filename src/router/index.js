import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../views/MSite/MSite'
import Search from '../views/Search/Search'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Login from '../views/Login/Login'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    // dynamic segments Start with a colon
    {
      path: '/',
      component: MSite,
      meta: {showFooter: true}
    },
    {
      path: '/msite',
      component: MSite,
      meta: {showFooter: true}
    },
    {
      path: '/search',
      component: Search,
      meta: {showFooter: true}
    },
    {path: '/order',
      component: Order,
      meta: {showFooter: true}
    },
    {path: '/profile',
      component: Profile,
      meta: {showFooter: true}
    },
    {path: '/login',
      component: Login
    }
  ]
})
