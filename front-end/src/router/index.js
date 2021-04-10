import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
const Ping = () => import('../components/Ping')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping
    }
  ]
})
