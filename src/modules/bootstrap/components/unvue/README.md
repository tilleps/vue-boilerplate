# Unvue

``` bash
npm install --save-dev html-loader
```


vue.config.js
``` js
{
  runtimeCompiler: true,
  chainWebpack: function(config) {
    return config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();
  }
}
```