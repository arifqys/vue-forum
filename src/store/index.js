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
    authId: 'L664y3qZSubDbT1R6npC0EEybJ73'
  },
  getters,
  actions,
  mutations
})
