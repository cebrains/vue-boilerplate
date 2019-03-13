

//登录页
const Login = r => require.ensure([], () => r(require('@/pages/login')), 'Login');
//录音单条
const RecordingSingle = r => require.ensure([], () => r(require('@/pages/work/components/recordingPlay.vue')), 'Recording');

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'TMS - 登录'
    }
  },
  //单条录音
  {
    path: '/recording-single',
    name: 'RecordingSingle',
    component: RecordingSingle,
    meta: {
      title: 'TMS - 录音',
      target:'_blank'
    }
  },
]