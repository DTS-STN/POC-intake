import APIService from '@/services/APIService'

export const state = () => ({
  pocs: [],
  poc: {}
})

export const mutations = {
  SET_POCS(state, pocs) {
    state.pocs = pocs
  },
  SET_POC(state, poc) {
    state.poc = poc
  }
}

export const actions = {
  fetchPocs({ commit }) {
    return APIService.getAllPocs().then(response => {
      commit('SET_POCS', response.data)
    })
  }

  //,   Future returns a single POC record
  //
  // fetchPoc({ commit }, id) {
  //   return APIService.getEvent(id).then(response => {
  //     commit('SET_EVENT', response.data)
  //   })
  // }
}
