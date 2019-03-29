
//错误页面
const ErrorPage404 = r => require.ensure([], () => r(require('@/components/errorPage/error404.vue')), 'ErrorPage404');


export default [
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