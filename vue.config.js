const path = require('path');

module.exports = {
  chainWebpack: config => {
    // 环境的配置，不同环境对应不同的BASE_URL
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
    if(process.env.NODE_ENV === 'production'){
      // 对不同的环境进行不同的操作

    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname,'src/assets/style/common/index.scss'),
        path.resolve(__dirname, 'src/assets/style/utilities/index.scss'),
        path.resolve(__dirname, 'src/assets/style/theme/index.scss'),
        path.resolve(__dirname,'src/assets/style/animation/index.scss')
      ]
    }
  }
}
