import Vue from 'vue'
import VueRouter from 'vue-router'
import feed from '../views/feed.cmp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/feed'
  },
  {
    name: 'feed',
    path: '/feed',
    component: feed,
  },
]

const router = new VueRouter({ routes });

export default router
