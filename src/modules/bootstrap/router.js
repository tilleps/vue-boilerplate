import Vue from "vue";
import Router from "vue-router";
import Home from "./components/home.vue";
import Protected from "./components/protected.vue";
import NotFound from "./components/not-found.vue";
import Login from "./components/login.vue";
import Logout from "./components/logout.vue";
import About from "./components/about.vue";
import Example from "./components/unvue";
//const Example = require('./components/example');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {}
    },
    {
      path: "/protected",
      name: "protected",
      component: Protected,
      meta: {
        hello: "world",
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        hello: "world"
      }
    },
    //
    //  Code split example
    //
    {
      path: "/about-code-split",
      name: "about-code-split",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        import(/* webpackChunkName: "about" */ "./components/about.vue");
      },
      meta: {
        hello: "world"
      }
    },
    {
      name: "example",
      path: "/example",
      component: Example
    },
    {
      name: "logout",
      path: "/logout",
      component: Logout
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "not-found",
      path: "*",
      component: NotFound
    }
  ]
});
