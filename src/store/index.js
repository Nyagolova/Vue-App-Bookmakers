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
    selectedBookmakers: {}
  },
  mutations: {
    CHECK_ALL_BOOKMAKERS (state, payload) {
      state.isAllBookmakersChecked = payload
    },
    FILTER_BOOKMAKERS(state, payload) {
      state.filteredBookmakers = payload
    },

    REMOVE_DOMAIN_BY_ID (state, payload) {
      let bookieDataById = state.bookmakersData.filter(obj => {
        return obj.id === payload.id
      })
      delete bookieDataById[0].links[payload.countryCode];
    }, 
    UPDATE_BOOKMAKER_ACTIVE_STATUS(state, payload){
      var bookmaker = state.selectedBookmakers
      var id = payload.id
      var activestatus = payload.status
      bookmaker[id] = bookmaker[id] || {}
      bookmaker[id].status = bookmaker[id].status || {}
      bookmaker[id].status = activestatus
    },
    UPDATE_BOOKMAKER_ORDER(state, payload){
      var bookmaker = state.selectedBookmakers
      var id = payload.id 
      bookmaker[id] = bookmaker[id] || {}
      bookmaker[id].order = bookmaker[id].order || {}
      bookmaker[id].order = payload.order
    },
    UPDATE_BOOKMAKER_DEFAULT_LINK(state, payload){
      var bookmaker = state.selectedBookmakers
      var id = payload.id 
      bookmaker[id] = bookmaker[payload.id] || {}
      bookmaker[id].defaultLink = bookmaker[id].defaultLink || {}
      bookmaker[id].defaultLink = payload.defaultLink
    },
    UPDATE_BOOKMAKER_NEW_DOMAINS(state, payload){
      var bookmaker = state.selectedBookmakers
      var id = payload.id
      var rowIndex = payload.rowIndex

      bookmaker[id] = bookmaker[id] || {}
      bookmaker[id].links = bookmaker[id].links || {}
      bookmaker[id].links[rowIndex] = bookmaker[id].links[rowIndex] || {}
      bookmaker[id].links[rowIndex].code = bookmaker[id].links[rowIndex].code || {}
      bookmaker[id].links[rowIndex].link = bookmaker[id].links[rowIndex].link || {}
      bookmaker[id].links[rowIndex].code = payload.code
      bookmaker[id].links[rowIndex].link = payload.link
 
    },
    SAVE_ALL_DATA (state) {

      var originalData = state.bookmakersData
      var changedData = state.selectedBookmakers

      for (let key in changedData) {
        if (state.selectedBookmakers[key].status) {

          var bookmakersItemData = originalData.find(obj => obj.id == key)
          if (changedData[key].order) {
            bookmakersItemData.order = changedData[key].order
          }

          if (changedData[key].defaultLink) {
            bookmakersItemData.links = bookmakersItemData.links || {}
            bookmakersItemData.links.default = bookmakersItemData.links.default  || ""
            bookmakersItemData.links.default = changedData[key].defaultLink
          }

          if (changedData[key].status) {
            bookmakersItemData.active = changedData[key].status
          }

          var newDomainLinks = changedData[key].links
          
          if (newDomainLinks) {
            for (var link in newDomainLinks) {
              var code = newDomainLinks[link].code
              if (bookmakersItemData.links) {
                if (bookmakersItemData.links[link]) {
                  delete bookmakersItemData.links[link];
                  bookmakersItemData.links[code] = newDomainLinks[link].link 
                } else {
                  bookmakersItemData.links[link] = ""
                  bookmakersItemData.links[code] = newDomainLinks[link].link 
                } 
              } else {
                bookmakersItemData.links = {} 
                bookmakersItemData.links[link] = ""
                bookmakersItemData.links[code] = newDomainLinks[link].link 
              }
            }
          }
        }
      }
      const data = JSON.stringify(state.bookmakersData)
      window.localStorage.setItem('newBookmakersData', data);
    }
  },
  actions: {
  },
  modules: {
  }
})
