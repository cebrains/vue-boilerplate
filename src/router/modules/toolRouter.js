/**
 *
 * 小工具
 */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
// 抢单屏蔽列表
const RobbingBlackList = r => require.ensure([], () => r(require('@/pages/tool/robbingBlackList')), 'RobbingBlackList');
// 临时课和体验课的抢单时间关闭
const tempRobbingBlackList = r => require.ensure([], () => r(require('@/pages/tool/tempRobbingBlackList')), 'tempRobbingBlackList');
// 身份证号冲突处理
const idCardConflict = r => require.ensure([], () => r(require('@/pages/tool/identityCardConflict/index.vue')), 'idCardConflict');
// 迟到白名单处理
const lateWhiteList = r => require.ensure([], () => r(require('@/pages/tool/lateWhiteList/index.vue')), 'lateWhiteList');
// 迟到白名单处理
const robbingStick = r => require.ensure([], () => r(require('@/pages/tool/robbingStick/index.vue')), 'robbingStick');

export default [
  {
    path: '/tool',
    name: 'tool',
    redirect: '/tool/robbingBlackList',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'robbingBlackList',
        name: 'robbingBlackList',
        component: RobbingBlackList,
        meta: {
          title: 'TMS - 抢单时间关闭'
        }
      },
      {
        path: 'tempRobbingBlackList',
        name: 'tempRobbingBlackList',
        component: tempRobbingBlackList,
        meta: {
          title: 'TMS - 临时课和体验课的抢单时间关闭'
        }
      },
      {
        path: 'idCardConflict',
        name: 'idCardConflict',
        component: idCardConflict,
        meta: {
          title: 'TMS - 身份证号冲突处理'
        }
      },
      {
        path: 'lateWhiteList',
        name: 'lateWhiteList',
        component: lateWhiteList,
        meta: {
          title: 'TMS - 迟到白名单处理'
        }
      },
      {
        path: 'robbingStick',
        name: 'robbingStick',
        component: robbingStick,
        meta: {
          title: 'TMS - 老师抢单置顶处理'
        }
      },

    ]
  }
]
