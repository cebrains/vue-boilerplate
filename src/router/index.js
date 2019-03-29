/*
*  模块化路由配置
*/

import Vue from 'vue';
import Router from 'vue-router'; // vue-router
import title from 'vue-wechat-title'; // 页面标题

Vue.use(title);
Vue.use(Router);

let routes = [];

/* 实现自动扫描子模块路由并导入 */
const routerContext = require.context('./modules/' ,true, /index\.js$/);
routerContext.keys().forEach(route => {
    // 根目录index.js  不处理
    if(route.startsWith('./index')){
        return
    }
    const routerModule = routerContext(route);
    // 兼容import export 和 require module.import两种规范
    routes =[...routes, ...(routerModule.default || routerModule)];
});


export default new Router(
    {
        mode: 'history',
        routes: routes
    }
);



