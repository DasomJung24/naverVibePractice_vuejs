import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchBtn: false,
  },
  getters: {
    getSearchBtn: state => {
      return state.searchBtn;
    },
  },
  // 실제 상태 수정, 첫번째 전달인자 -> state | state.commit('함수이름')
  mutations: {
    changeSearch(state) {
      state.searchBtn = !state.searchBtn;
    },
  },
  // 비동기에 사용
  actions: {},
});
