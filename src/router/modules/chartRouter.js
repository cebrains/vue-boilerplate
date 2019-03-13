/**
 * 
 *  系统图表模块
 */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//图表展示页
const BasicTable = r => require.ensure([], () => r(require('@/pages/chat/basicTable.vue')), 'BasicTable');

export default [
  {
    path: '/chat',
    name: 'chat',
    redirect: '/chat/basicTable',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'basicTable',
        name: 'basicTable',
        component: BasicTable,
        meta: {
          title: 'TMS - 老师管理系统'
        }
      }
    ]
  }
]
