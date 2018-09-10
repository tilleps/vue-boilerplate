"use strict";

//*
require("bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("@fortawesome/fontawesome-free/css/all.css");

import Vue from "vue";
import App from "./components/app.vue";
import router from "./router";
import store from "./store";
//import "./service-worker";

import requiresAuthGuard from "./router/guard/auth";

Vue.config.productionTip = false;

router.beforeEach(requiresAuthGuard(store));

//*
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
//*/
