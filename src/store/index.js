import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    orders: [],
    positions: []
}

const getters = {
    allOrders: (state) => state.orders
}

//to handle actions
const actions = {
    getOrders({ commit }) {
        axios.get('http://localhost:8080/api/order')
            .then(response => {
                commit('SET_ORDERS', response.data)
            })
    },
    getPositions({commit}, id){
        axios.get(`http://localhost:8080/api/order/${id}`)
            .then(response => {
                commit('SET_POSITIONS', response.data)
            })
    }
}

//to handle mutations
const mutations = {
    SET_ORDERS(state, orders) {
        state.orders = orders
    },
    SET_POSITIONS(state, positions){
        state.positions = positions
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
