/**
 *  聊天模块
 */

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
//全部老师
const AllTeacher = r => require.ensure([], () => r(require('@/pages/chat/teacherList/allTeacher.vue')), 'AllTeacher');
//上课中老师
const HasClassTeacher = r => require.ensure([], () => r(require('@/pages/chat/teacherList/inClass.vue')), 'HasClassTeacher');
//未上课老师
const NoClassTeacher = r => require.ensure([], () => r(require('@/pages/chat/teacherList/noClass.vue')), 'NoClassTeacher');
//其他
const OtherClassTeacher = r => require.ensure([], () => r(require('@/pages/chat/teacherList/otherTeacher.vue')), 'OtherClassTeacher');


export default [
  {
    path: '/chat',
    name: 'chat',
    redirect: '/chat/hasClassTeacher',
    component: Home,
    meta: {
      title: 'TMS - 老师管理系统'
    },
    children: [
      {
        path: 'allTeacher',
        name: 'allTeacher',
        component: AllTeacher,
        meta: {
          title: 'TMS - 全部老师'
        }
      },
      {
        path: 'hasClassTeacher',
        name: 'hasClassTeacher',
        component: HasClassTeacher,
        meta: {
          title: 'TMS - 上课中老师'
        }
      },
      {
        path: 'noClassTeacher',
        name: 'noClassTeacher',
        component: NoClassTeacher,
        meta: {
          title: 'TMS - 未上课老师'
        }
      },
      {
        path: 'otherClassTeacher',
        name: 'otherClassTeacher',
        component: OtherClassTeacher,
        meta: {
          title: 'TMS - 其他'
        }
      },
    ]
  },
]
