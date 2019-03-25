/*
* 首页模块store
* @store 后台数据管理
*/
import homeService from '../../service/homeService';
import { Message } from 'element-ui';

  const state = {
    username:'',
    avatar:'',
    menuList:[],
    permitted:false,
  }
  
  const getters = {
    fetch_username:state=>state.username,
    fetch_avatar:state=>state.avatar,
    fetch_menuList:state=>state.menuList,
    fetch_permitted:state=>state.permitted,
  };
  
  // 同步处理
  const mutations = {
    update_userInfo(state,payload){ 
      const { nickname,head } = payload; //payload  mutation的提交载荷
      state.username = nickname;
      state.avatar = head;
    },
    update_menuList(state,payload){
      const {data,permitted} = payload;
      state.menuList = data;
      state.permitted = permitted;
    }
  }
  
  // 异步处理
  const actions = {
    // 获取用户信息
    fetchUserInfo({commit}){
      return homeService.getUserInfo().then(res=>{
        commit("update_userInfo",res.data)   //store.commit可传入额外的参数，即mutation的载荷（payload）
      }).catch(error=>{
        Message.error({
          message: error.data.msg,
          center: true,
          duration:1500
        })
      })
    },
    // 获取菜单权限信息
    fetchMenuList({commit}){
      return homeService.getMenuList().then(res=>{
        commit("update_menuList",res)
      }).catch(error=>{
        Message.error({
          message: error.data.msg,
          center: true,
          duration:1500
        })
      })
    }
  }
  
  
  export default {
    state,
    getters,
    mutations,
    actions
  }
  