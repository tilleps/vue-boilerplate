<template>
  <div id="app" class="w-100 h-100 d-flex flex-column vignette">

    <transition name="slideup" mode="in-out">
    <nav v-if="!isCollapsed('nav')" id="nav" class="nav navbar navbar-expand-lg navbar-dark bg-dark py-1 flex-shrink-0 sticky-top2">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse flex-grow-1" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!--
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
          <a class="nav-item nav-link" href="#">About</a>
          -->
          
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/protected">Protected</router-link>
          <a class="nav-item nav-link disabled">Disabled</a>
          <a class="nav-item nav-link active">Active <span class="sr-only">(current)</span></a>
          <router-link class="nav-item nav-link" to="/about">About</router-link>
          <router-link class="nav-item nav-link" to="/logout">Logout</router-link>
          
        </div>
      
        <div class="text-white row ml-auto">
          <form class="form-inline col-sm flex-nowrap">
            <input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          <div class="text-light mx-3 col-sm">
            <button class="btn btn-sm btn-info">Sign-out</button>
          </div>
          
          <div class="btn-group col-sm">
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Right-aligned menu
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <form class="px-4 py-3">
                <div class="form-group">
                  <label for="exampleDropdownFormEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                </div>
                <div class="form-group">
                  <label for="exampleDropdownFormPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck">
                  <label class="form-check-label" for="dropdownCheck">
                    Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">New around here? Sign up</a>
              <a class="dropdown-item" href="#">Forgot password?</a>
            </div>
          </div>            
          
        </div>
        
        
        <div class="ml-auto text-white row" v-if="false">
          <div class="text-light mx-3 col-xs collapse">
            collapse
          </div>
          
          <div class="text-light mx-3 col-xs navbar-collapse">
            navbar-collapse
          </div>
          
          <div class="text-light mx-3 col-xs collapse navbar-collapse">
            collapse navbar-collapse
          </div>
          
          <form class="form-inline col-xs flex-nowrap">
            <input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        
          <div class="text-light mx-3 col-xs">
            <button class="btn btn-sm btn-info">Sign-out</button>
          </div>
        
          <div class="btn-group col-xs">
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Right-aligned menu
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <form class="px-4 py-3">
                <div class="form-group">
                  <label for="exampleDropdownFormEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                </div>
                <div class="form-group">
                  <label for="exampleDropdownFormPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck">
                  <label class="form-check-label" for="dropdownCheck">
                    Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">New around here? Sign up</a>
              <a class="dropdown-item" href="#">Forgot password?</a>
            </div>
          </div>
        
        </div>
        
      </div>
    
    </nav>
    </transition>
    
    
    <div class="h-100 d-flex flex-row" style="background: #eaf;">
      
      <transition name="slideleft" mode="in-out">
      <div v-if="!isCollapsed('lside')" class="lside flex-shrink-0 oy-auto flex-column">
        
        <ul class="p-0">
          <h4 class="container my-3">Links</h4> 
          {{ $route.meta.title }}
          
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-university"></i> Accounts</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-bookmark"></i> Bookmarks</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-calendar"></i> Calendar</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-address-book"></i> Contacts</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-question"></i> Dunno</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-utensils"></i> Food</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-car"></i> Garage</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-image"></i> Images</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-music"></i> Music</a></li>
          <li data-v-href="link.href" class="nav-item text-nowrap"><a href="#" target="_self" class="nav-link"><i class="fa fa-fw fa-camera"></i> Photography</a></li>
        </ul>

      </div>
      </transition>
      
      
      <div class="flex-grow-1 oy-auto">
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
      </div>
      
      
      <transition name="slideright" mode="in-out">
      <aside v-if="!isCollapsed('rside2')" class="rside oy-auto flex-shrink-0">
        Right Aside2
      </aside>
      </transition>
      
      
      <transition name="slideright" mode="in-out">
      <aside v-if="!isCollapsed('rside')" class="rside oy-auto flex-shrink-0">
        Right Aside
      </aside>
      </transition>

    </div>
    
    
    <div v-if="false" class="flex-grow-1 d-flex flex-row ox-auto">
      
      <transition name="slideleft" mode="in-out">
      <aside v-if="!isCollapsed('lside')" class="lside flex-shrink-0">
        
        <div class="container">
          Left Aside
          
          <h4>Links</h4>
        </div>
        
        <ul class="nav">
          <li class="nav-item text-nowrap">
            <a href="#" class="nav-link"><i class="fa fa-fw fa-university"></i> Accounts</a>
            
          </li>
        </ul>
        
        
      </aside>
      </transition>
      
      
      <router-view class="flex-grow-1 container-fluid d-flex flex-column" />
      
      
      <transition name="slideright" mode="in-out">
      <aside v-if="!isCollapsed('rside2')" class="rside flex-shrink-0">
        Right Aside2
      </aside>
      </transition>
      
      <transition name="slideright" mode="in-out">
      <aside v-if="!isCollapsed('rside')" class="rside flex-shrink-0">
        Right Aside
      </aside>
      </transition>
      
    </div>
    

    <transition name="slidedown">
    <div v-if="!isCollapsed('footer')" class="flex-shrink-0 foo">
      Footer
    </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  computed: {
    /*
    isAuthenticated: {
      get: function () {
        console.log('wtf');
        return this.$store.getters['user/isAuthenticated'];
      },
      set: function () {
        this.$store.dispatch('user/login', '1234');
      }
    }
    /*
    isAuthenticated: function () {
      console.log('wtf');
      return this.$store.getters['user/isAuthenticated'];
    }
    */
  },
  methods: {
    isAuthenticated: function() {
      return this.$store.getters["isAuthenticated"];
      //return this.$store.getters['user/isAuthenticated'];
    },
    isCollapsed: function(name) {
      //return this.$store.getters["collapse/items"][name];
      return this.$store.state.collapse.items[name];
    }
  }
};
</script>


<style lang="less">
.foo {
  min-height: 50px;
}

.lside {
  background: rgba(0, 0, 0, 0.4);
  flex-basis: 250px;
}

.lside a {
  color: #fff;
  font-weight: 600;
}

.rside {
  background: #faa;
  flex-basis: 150px;
}

//*
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
//*/

#nav {
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.routerview {
  /*margin-bottom: 60px;*/
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s;
  background: #fff;
  position: relative;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
