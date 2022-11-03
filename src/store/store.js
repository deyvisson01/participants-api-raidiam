import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

const dayjs = require('dayjs')

Vue.use(Vuex)

export const GET_DATA = 'GET_DATA'
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
export const SET_CITIES = 'SET_CITIES'
export const SET_UNIQUE_CITIES = 'SET_UNIQUE_CITIES'
export const SET_COUNT_UNIQUE_CITIES = 'SET_COUNT_UNIQUE_CITIES'
export const SET_LOADED_DATA = 'SET_LOADED_DATA'

const state = {
    data: [],
    loadedData: false,
    perpage: 15,
    cities: [],
    unique_cities: [],
    count_unique_cities: [],
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
    getUniqueCities: (state) => state.unique_cities,
    getCountUniqueCities: (state) => state.count_unique_cities,
    getLoadedData: (state) => state.loadedData,
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
    [SET_UNIQUE_CITIES](state, value) {
        state.unique_cities = value
    },
    [SET_COUNT_UNIQUE_CITIES](state, value) {
        state.count_unique_cities = value
    },
    [SET_LOADED_DATA](state, value) {
        state.loadedData = value
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
                commit(SET_CITIES, cities)
                let unique_cities = [...new Set(cities)];
                commit(SET_UNIQUE_CITIES, unique_cities)

                let aux_count_cities = []
                for (var i = 0; i < unique_cities.length; i++) {
                    let count_cities = cities.filter(x => x === unique_cities[i]).length;
                    aux_count_cities.push(count_cities)
                }
                commit(SET_COUNT_UNIQUE_CITIES, aux_count_cities)

                commit(SET_LOADED_DATA, true)
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