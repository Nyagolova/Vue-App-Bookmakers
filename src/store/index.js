import Vue from 'vue'
import Vuex from 'vuex'
import bookies from '@/store/bookies.json'
import countries from '@/store/countries.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmakersData: bookies,
    countriesData: countries,
    isAllBookmakersChecked: '',
    filteredBookmakers: []
  },
  mutations: {
    CHECK_ALL_BOOKMAKERS (state, payload) {
      state.isAllBookmakersChecked = payload
    },
    FILTER_BOOKMAKERS(state, payload) {
      state.filteredBookmakers = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
