// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

import AppDate from '@/components/AppDate'
Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDiOkkcBqzCE_8P8cOYOKZV7CvQN51XsoA',
  authDomain: 'forum-de776.firebaseapp.com',
  databaseURL: 'https://forum-de776.firebaseio.com',
  projectId: 'forum-de776',
  storageBucket: 'forum-de776.appspot.com',
  messagingSenderId: '179270677597',
  appId: '1:179270677597:web:a33faca456b806b6d349b4',
  measurementId: 'G-F66T6VH62F'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
