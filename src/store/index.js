import { createStore } from 'vuex';
import axios from 'axios';
const store = createStore({
  state() {
    return {
      count: 1,
      personalDetails: {
        firstName: 'Pawan',
        LastName: 'Patidar',
      },
      postData: {},
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateData(state, postData) {
      state.postData = postData;
    },
  },
  actions: {
    async getPostData({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      const data = response.data;
      commit('updateData', data);
    },
  },
  getters: {
    personFullName(state) {
      return state.personalDetails.firstName + state.personalDetails.LastName;
    },
  },
});

export default store;
