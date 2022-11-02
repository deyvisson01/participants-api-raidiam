import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export const GET_DATA = 'GET_DATA'

const state = {
    data: [],
    columns: [
        {
            dataKey: "LegalEntityName",
            name: "Legal Entity Name",
            align: "left",
        },
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
            align: "left",
            formatValue(value) {
            return format(value, "dd MMMM yyyy");
            },
        },
        {
            dataKey: "RegistrationNumber",
            name: "Registration Number",
            align: "right",
            formatValue(value) {
            return value.toLocaleString("en-GB");
            },
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