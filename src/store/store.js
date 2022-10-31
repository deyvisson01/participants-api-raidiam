import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export const GET_DATA = 'GET_DATA'

const state = {
    data: []
}

const getters = {
    getData: (state) => state.data
}

const mutations = {
    [GET_DATA](state, value) {
        state.data = value
    }
}

const actions = {
    async actionGetData({ commit }) {
        return api.get('/participants')
            .then((result) => {
                commit(GET_DATA, result.data)
                console.log(result.data)
            })
            .catch((error) => {
            console.log(error)
        })
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})