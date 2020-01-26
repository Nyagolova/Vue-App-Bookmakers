import Vue from 'vue'
import Vuex from 'vuex'
import bookies from '@/store/bookies.json'
import countries from '@/store/countries.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmakersData: bookies,
    countriesData: countries,
    bookmakersFiltration: '',
    selectedBookmakers: []
  },
  mutations: {
    BOOKMAKERS_FILTER (state, payload) {
      state.bookmakersFiltration = payload
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
