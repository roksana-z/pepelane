import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicles: [],
    selectedType: '',
  },
  mutations: {
    ADD_VEHICLE(state, vehicle) {
      state.vehicles.push(vehicle)
    },
    SELECT_VEHICLES(state, type) {
      state.selectedType = type;
    }
  },
  getters: {
    getCardById: state => id => {
      const data = state.vehicles.filter(vehicle => vehicle.id === id);
      return data[0];
    },
    getTypes: state => state.vehicles.map(vehicle => vehicle.type)
  },
  actions: {},
  modules: {}
})
