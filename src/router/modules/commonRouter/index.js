


// @ is an alias to /src

//登录页
const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'Login');


export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'TMS - 登录'
    }
  },
  
]