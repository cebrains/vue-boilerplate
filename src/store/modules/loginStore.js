/*
* 登录模块store
* @store 后台数据管理
*/

const state = {
  login_flag:false

}

const getters = {
  fetch_flag:state=>state.login_flag
  
};


const mutations = {
  updateFlag(state){
    state.login_flag = true;
  },
  initFlag(state){
    state.login_flag = false;
  }

}


const actions = {

}


export default {
  state,
  getters,
  mutations,
  actions
}
