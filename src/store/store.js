import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

const dayjs = require('dayjs')

Vue.use(Vuex)

export const GET_DATA = 'GET_DATA'
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
export const SET_CITIES = 'SET_CITIES'

const state = {
    data: [],
    perpage: 15,
    cities: [],
    columns: [
        {
            dataKey: "OrganisationName",
            name: "Organisation Name",
            align: "left",
            sorter: true,
        },
        {
            dataKey: "RegisteredName",
            name: "Registered Name",
            align: "left",
            sorter: true,
        },
        {
            dataKey: "City",
            name: "City",
            align: "left",
            sorter: true,
        },
        {
            dataKey: "CreatedOn",
            name: "Created On",
            align: "right",
            sorter: true,
            formatValue(value) {
                return dayjs(value).format('MMM D, YYYY - h:mm A')
            },
        },
        {
            dataKey: "RegistrationNumber",
            name: "Reg. Number",
            align: "right",
            sorter: false,
        },
    ],
}

const getters = {
    getData: (state) => state.data,
    getColumns: (state) => state.columns,
    getPageSize: (state) => state.perpage,
    getCities: (state) => state.cities,
}

const mutations = {
    [GET_DATA](state, value) {
        state.data = value
    },
    [SET_PAGE_SIZE](state, value) {
        state.perpage = value
    },
    [SET_CITIES](state, value) {
        state.cities = value
    },
}

const actions = {
    async actionGetData({ commit }) {
        return api.get('/participants')
            .then((result) => {
                commit(GET_DATA, result.data)
                console.log(result.data)
                let cities = result.data.map(function (data) {
                    return data.City
                });
                let unique_cities = [...new Set(cities)];
                commit(SET_CITIES, unique_cities)
            })
            .catch((error) => {
            console.log(error)
        })
    },

    actionSetPageSize({ commit,value }) {
        commit(SET_PAGE_SIZE, value)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})