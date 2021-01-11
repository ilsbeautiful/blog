import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
import modulesA from '@/store/module/modulesA'
Vue.use(Vuex)

const state = {
  info: {
    name: '',
    age: ''
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    modulesA
  }
})
