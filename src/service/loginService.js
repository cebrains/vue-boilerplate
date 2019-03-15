/*
* 模块调取后台登录模块api
* @api 后台api地址
*/
import HttpRequest from '../api/httpRequest';

const LOGIN_SERVICE = {
  //用户登录操作
  getLogon: function(params) {
    return HttpRequest({ method:'post', url:'/site/logon', data:params});
  },
  
}
export default LOGIN_SERVICE;