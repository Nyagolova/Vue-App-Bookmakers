import Vue from 'vue'
import Vuex from 'vuex'
import bookies from '@/store/bookies.json'
import countries from '@/store/countries.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmakersData: JSON.parse(window.localStorage.getItem('newBookmakersData')) || bookies,
    countriesData: countries,
    isAllBookmakersChecked: '',
    filteredBookmakers: [],
    test: ''
  },
  mutations: {
    CHECK_ALL_BOOKMAKERS (state, payload) {
      state.isAllBookmakersChecked = payload
    },
    FILTER_BOOKMAKERS(state, payload) {
      state.filteredBookmakers = payload
    },
    UPDATE_DEFAULT_DOMAIN(state, payload) {
      let bookieDataById = state.bookmakersData.filter(obj => {
        return obj.id === payload.id
      })
      bookieDataById[0].links = bookieDataById[0].links || {}
      bookieDataById[0].links.default = payload.domainLink;
    },
    ADD_NEW_DOMAIN(state, payload) {
      let bookieDataById = state.bookmakersData.filter(obj => {
        return obj.id === payload.id
      })
      let code = payload.countryCode
      bookieDataById[0].links = bookieDataById[0].links || {}
      bookieDataById[0].links[code] = bookieDataById[0].links[code] || "";
      bookieDataById[0].links[code] = payload.domainText
    },
  },
  actions: {
  },
  modules: {
  }
})
