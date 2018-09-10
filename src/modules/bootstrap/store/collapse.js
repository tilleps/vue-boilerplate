"use strict";

import Vue from "vue";

const CollapseStore = {
  namespaced: true,
  state: {
    items: {
      //nav: true,
      //lside: true,
      //rside: true,
      //rside2: true,
      //footer: true
    }
  },
  getters: {
    items: function(state) {
      return state.items;
    }
  },
  actions: {
    /*
    init: function(ctx, payload) {
      console.log('init', payload);
      
      for (var key in payload) {
        console.log("key", key, payload[key]);
        ctx.commit("SET", {
          key: key,
          value: payload[key]
        });
      }
      
    },
    //*/
    toggle: function(ctx, name) {
      ctx.commit("TOGGLE", name);
    }
  },
  mutations: {
    /*
    SET: function (state, payload) {
      
      console.log('this.set', this.set, this.$set);
      Vue.set(state.names, payload.key, payload.value);
      //state.names[payload.key] = payload.value;
    },
    //*/
    TOGGLE: function(state, name) {
      //console.log("TOGGLE", this, name, state.items[name]);
      //state.names[name] = !state.names[name];
      //this._vm.$set(state.items, name, !state.items[name]);
      Vue.set(state.items, name, !state.items[name]);
    }
  }
};

export default CollapseStore;
