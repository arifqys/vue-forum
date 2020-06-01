import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Category from '@/pages/PageCategory'
import Forum from '@/pages/PageForum'
import ThreadCreate from '@/pages/PageThreadCreate'
import ThreadEdit from '@/pages/PageThreadEdit'
import ThreadShow from '@/pages/PageThreadShow'
import Profile from '@/pages/PageProfile'
import Register from '@/pages/PageRegister'
import SignIn from '@/pages/PageSignIn'
import NotFound from '@/pages/PageNotFound'
import store from '@/store'

Vue.use(Router)

const router = new Router({
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
      component: ThreadCreate,
      meta: {requiresAuth: true}
    },
    {
      path: '/thread/:id/edit',
      props: true,
      name: 'ThreadEdit',
      component: ThreadEdit,
      meta: {requiresAuth: true}
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
      component: Profile,
      meta: {requiresAuth: true}
    },
    {
      path: '/me/edit',
      props: {edit: true},
      name: 'ProfileEdit',
      component: Profile,
      meta: {requiresAuth: true}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {requiresGuest: true}
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      meta: {requiresGuest: true}
    },
    {
      path: '/logout',
      name: 'SignOut',
      meta: {requiresAuth: true},
      beforeEnter (to, from, next) {
        store.dispatch('signOut')
          .then(() => next({name: 'Home'}))
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log(`🚦 navigating to ${to.name} from ${from.name}`)
  store.dispatch('auth/initAuthentication')
    .then(user => {
      if (to.matched.some(route => route.meta.requiresAuth)) {
        // protected route
        if (user) {
          next()
        } else {
          next({name: 'SignIn', query: {redirectTo: to.path}})
        }
      } else if (to.matched.some(route => route.meta.requiresGuest)) {
        // protected route
        if (!user) {
          next()
        } else {
          next({name: 'Home'})
        }
      } else {
        next()
      }
    })
})

export default router
