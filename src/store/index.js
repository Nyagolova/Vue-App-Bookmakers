import Vue from 'vue'
import Vuex from 'vuex'
import bookies from '@/store/bookies.json'
import countries from '@/store/countries.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmakersData: bookies,
    countriesData: countries,
    bookmakersChecked: '',
    selectedBookmakers: []
  },
  mutations: {
    CHECK_BOOKMAKERS (state, payload) {
      state.bookmakersChecked = payload
    },
    FILTER_BOOKMAKERS(state, payload) {
      state.selectedBookmakers = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
