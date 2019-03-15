

import Axios from 'axios';
import Env from './env';


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

    // // `onUploadProgress` allows handling of progress events for uploads
    // onUploadProgress: function (progressEvent) {
    // // Do whatever you want with the native progress event
    // },

    // // `onDownloadProgress` allows handling of progress events for downloads
    // onDownloadProgress: function (progressEvent) {
    // // Do whatever you want with the native progress event
    // },


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
    return Promise.reject(error);
});
export default axios;
