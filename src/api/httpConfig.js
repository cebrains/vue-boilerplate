

import Axios from 'axios';
import Env from './env';
import { Message } from 'element-ui';

const config = {
    // 请求类型，默认get
    method: 'get',
    baseURL: Env.api, // 当前环境地址
   // baseURL: process.env.BASE_URL  // or这种方法获取当前环境地址

    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        // 'Authorization': ''
    },

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    params: {},

    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // When no `transformRequest` is set, must be of one of the following types:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    data: {},

    timeout: 60000,

    withCredentials: true, // default

    responseType: 'json', // default

    // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    xsrfCookieName: 'XSRF-TOKEN', // default

    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    xsrfHeaderName: 'X-XSRF-TOKEN', // default

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    //如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
      return status >= 200 && status < 300; // 默认的  注意这里是服务器层级的http状态码 不是后台的状态码
    },


}

const axios = Axios.create(config);

// 请求拦截配置
axios.interceptors.request.use(config => {
    return config;
}, error => {
    console.warn('request error', error)
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 返回拦截配置
axios.interceptors.response.use(res => {
    return res;
}, error => {
     // 断网 或者 请求超时 状态
	if (!error.response) {
		// 请求超时状态
		if (error.message.includes('timeout')) {
		console.log('超时了');
		Message.error('请求超时，请检查网络是否连接正常')

		} else {
		// 可以展示断网组件
		console.log('断网了')
		Message.error('请求失败，请检查网络是否已连接')
		}
		return
	}

    return Promise.reject(error);
});
export default axios;
