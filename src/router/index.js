import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import Search from '@/components/Search'
import Liuhangkai from '@/components/Liuhangkai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
     {
      path: '/liuhangkai',
      name: 'Liuhangkai',
      component: Liuhangkai
    }
  ],
    mode:"history"
})
