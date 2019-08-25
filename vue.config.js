// const webpack = require('webpack')

// vue.config.js
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/variable.scss";
        `
      }
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       // jquery
  //       $: 'jquery',
  //       'window.jQuery': 'jquery',
  //       jQuery: 'jquery',
  //       // Moment
  //       moment: 'moment',
  //       // lodash
  //       '_': 'lodash'
  //     })
  //   ]
  // },
}
