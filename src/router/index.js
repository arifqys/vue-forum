import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Category from '@/pages/PageCategory'
import Forum from '@/pages/PageForum'
import ThreadShow from '@/pages/PageThreadShow'
import NotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cateory/:id',
      props: true,
      name: 'Category',
      component: Category
    },
    {
      path: '/forum/:id',
      props: true,
      name: 'Forum',
      component: Forum
    },
    {
      path: '/thread/:id',
      props: true,
      name: 'ThreadShow',
      component: ThreadShow
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
