/*
* 模块调取后台登录模块api
* @api 后台api地址
*/
import HttpRequest from '../api/http';

const LOGIN_POST = {
  //获取登录状态
  getLoginStatus: function() {
    return HttpRequest("get","/site/login");
  },
  //用户登录操作
  getLogon: function(params) {
    return HttpRequest("post","/site/logon",params);
  },
  //用户注销
  getLogout:function(){
    return HttpRequest("get","/site/logout");
  }
}
export default LOGIN_POST;