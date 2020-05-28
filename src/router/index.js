import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Category from '@/pages/PageCategory'
import Forum from '@/pages/PageForum'
import ThreadCreate from '@/pages/PageThreadCreate'
import ThreadEdit from '@/pages/PageThreadEdit'
import ThreadShow from '@/pages/PageThreadShow'
import Profile from '@/pages/PageProfile'
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
      path: '/thread/create/:forumId',
      props: true,
      name: 'ThreadCreate',
      component: ThreadCreate
    },
    {
      path: '/thread/:id/edit',
      props: true,
      name: 'ThreadEdit',
      component: ThreadEdit
    },
    {
      path: '/thread/:id',
      props: true,
      name: 'ThreadShow',
      component: ThreadShow
    },
    {
      path: '/me',
      props: true,
      name: 'Profile',
      component: Profile
    },
    {
      path: '/me/edit',
      props: {edit: true},
      name: 'ProfileEdit',
      component: Profile
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
