import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from 'views/recommend/Recommend'
import Singer from 'views/singer/Singer'
import Rank from 'views/rank/Rank'
import Search from 'views/search/Search'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
