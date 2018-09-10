<template>
  <div class="d-flex flex-column h-100 vignette">
    <div class="m-auto p-4 login-container">
      
      <div class="py-2">Logged Out</div>
      <div class="form-group m-0">
      
        <router-link class="nav-item nav-link" to="/login">Login</router-link>
        
      </div>
      
    </div>
  </div>

</template>


<style>
.login-container {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.1);
}
</style>


<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "logout",
  components: {},
  methods: {},
  created: function() {
    this.$store.dispatch("user/logout");
  }
};
</script>
