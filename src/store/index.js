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
    selectedBookmakers: [],
    additionalTextfields: { id: 0, count: 0},
    selectedId : 0,
    count : 0,
    itemIsUpdated: []
  },
  mutations: {
    CHECK_BOOKMAKERS (state, payload) {
      state.bookmakersChecked = payload
    },
    FILTER_BOOKMAKERS(state, payload) {
      state.selectedBookmakers = payload
    },
    ADD_DOMAIN_DATA(state, payload) {
      var id = payload.id;
      var count = payload.count;
      state.additionalTextfields[id] = count
    },
    SET_COUNT(state, payload) {
      state.count = payload
    },
    SET_ID(state, payload) {
      state.selectedId = payload
    },
    UPDATE_ITEM (state, payload) {
      state.itemIsUpdated.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
