<template>
  <div class="d-flex flex-column h-100 vignette">
    <div class="m-auto p-4 login-container">
      
      <div class="py-2">Login required</div>
      <div class="form-group m-0">
      
        <form class="m-0">
          <div class="form-row mb-2">
            <div class="col">
              <input type="text" name="identity" class="form-control" placeholder="Username">
            </div>
            <div class="col">
              <input type="text" name="password" class="form-control" placeholder="Password">
            </div>
          </div>          
          <div class="form-group m-0 text-right">
            <button class="btn btn-primary" v-on:click.prevent="login()">Login</button>
          </div>
        </form>
      
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
  name: "login",
  components: {
    //HelloWorld
  },
  methods: {
    login: async function() {
      try {
        var result = await this.$store.dispatch("user/login", "abc123");

        window.console.log("result", result);

        if (result === "success") {
          var redirectURL = this.$route.query.redirect || "/";
          this.$router.push({
            path: redirectURL
          });
        }

        if (result === "failed") {
          window.console.log("Failed");
        }
      } catch (err) {
        window.console.log("Error logging in", err);
      }
    }
  }
};
</script>
