import Vue from "vue";
import Vuex from "vuex";

import CollapseStore from "./store/collapse";
import UserStore from "./store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //hello: "world"
  },
  modules: {
    collapse: CollapseStore,
    user: UserStore
  },
  mutations: {},
  actions: {},
  getters: {
    isAuthenticated: function(state, getters) {
      return getters["user/isAuthenticated"];
    }
  }
});
