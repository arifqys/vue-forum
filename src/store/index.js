import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {},
    forums: {},
    threads: {},
    posts: {},
    users: {},
    authId: null,
    unsubscribeAuthObserver: null
  },
  getters,
  actions,
  mutations
})
