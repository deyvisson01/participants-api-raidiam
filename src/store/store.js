import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

const dayjs = require('dayjs')

Vue.use(Vuex)

export const GET_DATA = 'GET_DATA'

const state = {
    data: [],
    columns: [
        {
            dataKey: "OrganisationName",
            name: "Organisation Name",
            align: "left",
        },
        {
            dataKey: "RegisteredName",
            name: "Registered Name",
            align: "left",
        },
        {
            dataKey: "City",
            name: "City",
            align: "left",
        },
        {
            dataKey: "CreatedOn",
            name: "Created On",
            align: "right",
            formatValue(value) {
                return dayjs(value).format('MMM D, YYYY - h:mm A')
            },
        },
        {
            dataKey: "RegistrationNumber",
            name: "Reg. Number",
            align: "right",
        },
    ],
}

const getters = {
    getData: (state) => state.data,
    getColumns: (state) => state.columns,
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