import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import Search from '@/components/Search'
import Liuhangkai from '@/components/Liuhangkai'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

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
      component: Liuhangkai,
      children:[
        {
          path: '/hi1',
          component: Hi1
        },
        {
          path: '/hi2',
          component: Hi2
        }
      ]
    }
  ],
    mode:"history"
})
