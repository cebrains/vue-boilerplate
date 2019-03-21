/*
* 模块调取后台首页模块api
* @api 后台api地址
*/
import HttpRequest from '../api/httpRequest';

const HOME_SERVICE = {
  //获取用户基础登陆信息  return HttpRequest({ method:'post', url:'/site/logon', data:params});
  getUserInfo:function(){
    return HttpRequest({ method:'get', url:'/account/get-account-info'});
  },
  //获取用户权限列表
  getMenuList: function() {
    return HttpRequest({method:"get",url:"/account/get-menu"});
  },
  // 修改密码
  changePassword: function(params) {
    return HttpRequest({method:"post", url:"/account/change-password",data:params});
  },
  
}
export default HOME_SERVICE;