"use strict";

//  https://router.vuejs.org/en/advanced/meta.html
module.exports = function requiresAuthGuard(store) {
  return function(to, from, next) {
    function requiresAuthFilter(record) {
      return record.meta.requiresAuth;
    }

    if (to.matched.some(requiresAuthFilter)) {
      if (!store.getters.isAuthenticated) {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          }
        });

        return;
      } else {
        // Already authenticated
        next();
        return;
      }
    }

    next();
  };
};
