
/*
* 全局环境配置
* localhost／ development／ pre／ production *
* @api 后台api地址
* @link 全局链接地址
* @share 全局分享默认配置
*/
const CONFIG = {
    // 本地环境
    localhost: {
      api: 'https://apiteacher-dev.peilian.com',
      link: {
        index: 'http://localhost:8080'
      }
    },
    // DEV环境
    development: {
      api: 'https://apiteacher-dev.peilian.com',
      link: {
        index: 'https://teacher-dev.peilian.com'
      }
    },
    // TEST环境
    test: {
      api: 'https://apiteacher-pre.peilian.com',
      link: {
        index: 'https://teacher-pre.peilian.com'
      }
    },
    // PRD环境
    production: {
      api: 'https://apiteacher.peilian.com',
      link: {
        index: 'https://teacher.peilian.com'
      }
    }
  };
  
  //检测环境
  let host = window.location.host;
  if(host.indexOf('teacher-dev.peilian.com')>-1){
    global.APIMSG = CONFIG.development;
  }else if(host.indexOf('teacher-pre.peilian.com')>-1){
    global.APIMSG = CONFIG.test;
  }else if(host.indexOf('teacher.peilian.com')>-1){
    global.APIMSG = CONFIG.production;
  }else{
    global.APIMSG = CONFIG.localhost;
  }
  
  export default global.APIMSG;
  