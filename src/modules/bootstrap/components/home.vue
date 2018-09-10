<template>
  <div class="container-fluid">
    <h2>Hello World</h2>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div>
      
      <button class="btn btn-info m-1" v-on:click="toggle('nav')">Nav Toggle</button>
      <button class="btn btn-info m-1" v-on:click="toggle('lside')">L-Side Toggle</button>
      <button class="btn btn-info m-1" v-on:click="toggle('rside2')">R-Side2 Toggle</button>
      <button class="btn btn-info m-1" v-on:click="toggle('rside')">R-Side Toggle</button>
      <button class="btn btn-info m-1" v-on:click="toggle('footer')">Footer Toggle</button>
    </div>

        
    <div style="background: #eef; height: 800px; width: 200px;">
      asfsd
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    //HelloWorld
  },
  /*
  beforeRouteEnter: function (to, from, next) {
    
    console.log('hello!!');
    
    next(function (vm) {
      var isAuthenticated = vm.$store.getters['user/isAuthenticated'];
      console.log('isAuthenticated', isAuthenticated);
    });
  },
  //*/
  methods: {
    toggle: function(name) {
      //console.log('!!', name);
      this.$store.dispatch("collapse/toggle", name);
      //this.$store.state.collapse[name] = !this.$store.state.collapse[name];
    },
    isCollapsed: function(name) {
      //console.log('this.$store.state.collapse.items[name]', this.$store.state.collapse.items[name]);
      return this.$store.state.collapse.items[name];
    }
  }
};
</script>
