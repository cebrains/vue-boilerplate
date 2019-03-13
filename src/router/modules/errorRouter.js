
//错误页面
const ErrorPage401 = r => require.ensure([], () => r(require('@/components/error401.vue')), 'ErrorPage401');
const ErrorPage402 = r => require.ensure([], () => r(require('@/components/error402.vue')), 'ErrorPage402');
const ErrorPage403 = r => require.ensure([], () => r(require('@/components/error403.vue')), 'ErrorPage403');
const ErrorPage404 = r => require.ensure([], () => r(require('@/components/error404.vue')), 'ErrorPage404');
const ErrorPage307 = r => require.ensure([], () => r(require('@/components/error307.vue')), 'ErrorPage307');


export default [
  //登录过期
  {
    path: '/loginExpired',
    name: 'errorPage401',
    component: ErrorPage401,
    meta: {
      title: '抱歉-登录过期'
    }
  },
  //权限变更
  {
    path: '/authChange',
    name: 'errorPage402',
    component: ErrorPage402,
    meta: {
      title: '抱歉-权限变更'
    }
  },
  //无权查看
  {
    path: '/noPermission',
    name: 'errorPage403',
    component: ErrorPage403,
    meta: {
      title: '抱歉-无权查看'
    }
  },
  //无系统权限
  {
    path: '/noAuth',
    name: 'errorPage307',
    component: ErrorPage307,
    meta: {
      title: '抱歉-无系统权限'
    }
  },
  //404错误页
  {
    path: '*',
    name: 'errorPage404',
    component: ErrorPage404,
    meta: {
      title: '抱歉-访问出错了'
    }
  },
]