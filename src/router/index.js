/*
*  模块化路由配置
*/

import Vue from 'vue';
import Router from 'vue-router'; // vue-router
import title from 'vue-wechat-title'; // 页面标题

// 子模块路由
import CommonRouter from './modules/commonRouter' // 公共模块
import HomeRouter from './modules/homeRouter' // 主页模块  公共页面
import ErrorRouter from './modules/errorRouter';  // 错误页面模块



Vue.use(title);
Vue.use(Router);

export default new Router(
 {
    mode: 'history',
    routes: [
      ...CommonRouter,  
      ...HomeRouter,   
      ...ErrorRouter, 
    
      ]
  }
);

