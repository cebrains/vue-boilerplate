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
   //配置全局引入scss文件
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
  },
  // 跨域配置
  devServer: {
    proxy: {
      '/apis': {  //这里记得要将后台接口地址改为对应的变量apis
        target: 'https://teacher-dev.peilian.com', //后台接口地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/apis': '' //ajax的url为/apis/user的请求将会访问https://teacher-dev.peilian.com/user
        }
      }
    }
  }
}
