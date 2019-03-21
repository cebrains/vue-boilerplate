import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
