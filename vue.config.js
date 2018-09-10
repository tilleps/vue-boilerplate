module.exports = {
  baseUrl: './',              // default '/'
  outputDir: 'dist',          // default dist
  assetsDir: '_assets',       // default ''
  filenameHashing: true,      // default true
  /*
  configureWebpack: { 
    resolve: { 
      alias: {
        // https://github.com/vuejs-templates/webpack/issues/215#issuecomment-238095102
        vue: 'vue/dist/vue.runtime.esm.js'
      }
    } 
  },
  //*/
  //*
  //  npm install --save-dev html-loader
  runtimeCompiler: true,
  chainWebpack: function(config) {
    return config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();
  },
  //*/
  pages: {
    index: {
      entry: 'src/modules/vue-cli/main.js',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    "vue-cli": {
      entry: 'src/modules/vue-cli/main.js',
      template: 'public/index.html',
      filename: 'vue-cli.html',
      title: 'Vue CLI Example',
      chunks: ['chunk-vendors', 'chunk-common', 'vue-cli']
    },
    bootstrap: {
      entry: 'src/modules/bootstrap/main.js',
      template: 'src/modules/bootstrap/index.html',
      filename: 'bootstrap.html',
      title: 'Bootstrap Example',
      //chunks: ['chunk-vendors', 'chunk-common', 'bootstrap']
    }
    /*
    ,
    docs: {
      docs: 'src/docs/main.js'
    }
    /*
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    docs: 'src/docs/main.js'
    //*/
  }/*,
  lintOnSave: true,           // default true
  runtimeCompiler: false,     // default false
  transpileDependencies: [],  // default []
  productionSourceMap: true,  // default false
  configureWebpack: function (config) {
    return config;
  },
  css: {
    modules: false,           // default false
    extract: true,            // default true
    sourceMap: false,         // default false
    loaderOptions: {},
  },
  devServer: {
    //proxy: 'http://localhost:4000'
  },
  pluginOptions: {
    foo: {}
  }
  //*/
};

/*
module.exports = {
  baseUrl: '',                // default '/'
  outputDir: 'dist',          // default dist
  assetsDir: '_assets',       // default ''
  indexPath: 'index.html',    // default index.html
  filenameHashing: true,      // default true
  pages: {
    index: 'src/main.js',
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    docs: 'src/docs/main.js'
  },
  lintOnSave: true,           // default true
  runtimeCompiler: false,     // default false
  transpileDependencies: [],  // default []
  productionSourceMap: true,  // default false
  configureWebpack: function (config) {
    return config;
  },
  css: {
    modules: false,           // default false
    extract: true,            // default true
    sourceMap: false,         // default false
    loaderOptions: {},
  },
  devServer: {
    //proxy: 'http://localhost:4000'
  },
  pluginOptions: {
    foo: {}
  }
};
//*/
