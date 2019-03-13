

/*
 * axios http请求配置
 * @baseURL 请求api地址
 * @headers 头文件设置
 * @timeout 超时时间
 */

import Axios from 'axios'
import router from '../router'
import { Message } from 'element-ui';
//import Env from './env';

const service = Axios.create({
	baseURL: process.env.BASE_URL || "http://localhost:8080", // 当前环境api地址
	//baseURL: Env.api || "http://localhost:8080", // 当前环境api地址
	timeout: 5000  // 请求超时时间
})


/**
 * 请求前拦截 (request拦截器)
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	// if (store.getters.token){
	// 	config.headers['X-Token'] = getToken() // 让每个请求携带自定义token
	// }
	if (token) {
		config.headers['Authorization'] = token
	}
	return config
	}, (error) => {
	return Promise.reject(error)
})


/**
 * 请求响应拦截 (respone拦截器)
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use((res) => {
    if(res.config.responseType==='blob'){
        if(res.data.type.includes("json")){
					let blobData = res.data;
					let fr = new FileReader();
					fr.onload = () => {
						let { code } = JSON.parse(fr.result);
						if(code===400){
							router.replace('/login');
						}else if(code===401){
							router.replace('/loginExpired');
						}else if(code===402){
							router.replace('/authChange');
						}else if(code===403){
							router.replace('/noPermission');
						}else if(code===307){
							router.replace('/noAuth');
						} else {
							return Promise.reject(res);
						}
					};
					fr.readAsText(blobData);
        }else if (res.data.type.includes("text/html")) {
					// 账户登出后导出 提示需要登录
					router.replace('/login');
        } else {
          return Promise.reject(res);
        }
    }else{
			if (res.data.code !== 200) {
				if(res.data.code===400){
					router.replace('/login');
				}else if(res.data.code===401){
					router.replace('/loginExpired');
				}else if(res.data.code===402){
					router.replace('/authChange');
				}else if(res.data.code===403){
					router.replace('/noPermission');
				}else if(res.data.code===307){
					router.replace('/noAuth');
				}
				return Promise.reject(res);
			}else{
				return res;
			}
    }
}, (error) => {
    const errorData = JSON.parse(JSON.stringify(error));
    const url = errorData.config.url;
    // 加载时间过长或断网，提示网络异常
    if (!Object.keys(errorData.request).length && url!='http://chat.dev.pnlyy.com/v1/link/check-onlines') {
			Message.error({
				message: error.response.data.message,
				center: true,
				duration: 3000
			})
      return Promise.reject(error);
    }
    return Promise.reject(error);
});




export default service

  
 


