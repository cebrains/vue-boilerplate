
/*
* 全局环境配置
* localhost／ development／ pre／ production *
* @api 后台api地址
* @link 全局链接地址
* @share 全局分享默认配置
*/


//检测环境
let host = window.location.host;
if(host.indexOf('teacher-dev.peilian.com')>-1){
  global.APIMSG = process.env.BASE_URL;
}else if(host.indexOf('teacher-qa.peilian.com')>-1){
  global.APIMSG = process.env.BASE_URL;
}else if(host.indexOf('teacher-pre.peilian.com')>-1){
  global.APIMSG = process.env.BASE_URL;
}else if(host.indexOf('teacher.peilian.com')>-1){
  global.APIMSG = process.env.BASE_URL;
}else{
  //global.APIMSG = CONFIG.localhost;
}

export default global.APIMSG;