"use strict";

import Vue from "vue";

const UserStore = {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    isAuthenticated: function(state) {
      return state.user ? true : false;
    }
  },
  actions: {
    login: function(ctx, id) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          ctx.commit("LOGIN", id);

          var result = true;
          if (result) {
            resolve("success");
          } else {
            reject("failed");
          }
        }, 100);
      });
    },
    logout: function(ctx) {
      ctx.commit("LOGOUT");
      return new Promise(function(resolve, reject) {
        var result = true;
        if (result) {
          resolve("wtf");
        } else {
          reject();
        }
      });
    },
    toggle: function(ctx, name) {
      ctx.commit("TOGGLE", name);
    }
  },
  mutations: {
    LOGIN: function(state, id) {
      Vue.set(state, "user", {
        id: id
      });
    },
    LOGOUT: function(state) {
      Vue.set(state, "user", null);
    }
  }
};

export default UserStore;
