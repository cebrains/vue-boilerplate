/**
 *  主页   均采用懒加载
 */

//主页
const Home = r => require.ensure([], () => r(require('@/views/home/index')), 'Home');


export default [
  //主页
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
     

    ]
  },
]
