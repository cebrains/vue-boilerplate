
/**
 * @desc http请求方法
 * @external axios                  http请求库
 * @func httpRequest                http请求方法
 * @exports httpRequest             导出http请求方法
 */

import router from '../router';
//import store from '../store';
import axios from './httpConfig';
import { Message } from 'element-ui';
import Storage from '../util/storage';
import Qs from 'qs';

/**
 * @desc 请求模块
 * @param  {String} type                  请求方式，选填，默认值get
 * @param  {String} url                   这里传入的是接口路径, 必填
 * @param  {Object} data                  请求主体被发送的数据，选填
 * @param  {Object} params                url请求参数，选填
 * @param  {Boolean} isOtherLink          是否是其他api接口链接，选填
 * @param  {Object} options               包含其他参数属性的对象，选填
 * @prop   {Object} options.header        请求头设置，选填，会覆盖默认配置
 * @return {Object} Promise
 */


const httpRequest = ({
    type = 'get',
    url = '',
    data = {},
    params = {},
    isOtherLink= false,
    ...options
}) => {
    let conf = {
        authentication: !1, // 是否需要权限验证 默认不需要
        ...options,
    }
    const tokenKey = 'tmsToken';
    let token = '';

    // json
    axios.defaults.headers['Content-Type'] = options.contentType || "application/x-www-form-urlencoded;charset=UTF-8";
    if (options.contentType) {
       axios.defaults.headers.common['Accept'] = '*/*';
    }

    if (conf.authentication) {
        // 当前接口请求使用jwt认证方式
        token = Storage.session.get(tokenKey); // 先从本地尝试获取token;
        if ( token === 'undefined' || !token ) {
            token = '';
        }
        // 配置请求头认证
       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    
    return new Promise((resolve, reject) => {
        url = isOtherLink ? url : axios.defaults.baseURL + url;
        axios.request({ 
                type, 
                url,
                data:Qs.stringify(data),  // 参数序列化
                params:Qs.stringify(params),
                ...conf,
            })
            .then(res => {
                let code = res.data.code; // 这里是后台返回的状态码，根据业务不同可修改
                // token都通过headers传输，如果response的headers里有token值，则表示为最新的token并同步更新存储；
                if (res.headers['authentication-info']) {
                    Storage.session.set(tokenKey, res.headers['authentication-info']);
                }
                // 判断请求的是json数据还是文件数据
                // 如果是文件数据则返回整个response
                if ( conf.responseType === 'blob' ) {
                    resolve(res);
                } else {
                    if(res.data.code === 200) {
                        //store.dispatch('authAction', !!1);
                        resolve(res.data);
                    }else if(code === 307){
						router.replace('/noAuth');
                    }else if(code === 400){
						router.replace('/login');
					}else if (code === 401) { 
						router.replace('/loginExpired');
					} else if(code == 402){
						router.replace('/authChange');
					}else if (code === 403) {
                        router.replace('/noPermission');
                    } else {
                        resolve(res.data);
                    }
                }
            })
            .catch(error => {
                 if (error.response) {
                    let status = error.response.status; // 这里是服务器的层级的http状态码
                    if (status === 404) {
                        Message({ message: '请求的数据不存在', type: 'error' });
                        reject(error);
                    } else if (status === 500) {
                        Message({ message: '服务器异常', type: 'error' });
                        reject();
                    } else {
                        reject(error);
                    }
                } else if (error.request) {
                  Message({ message: '请求失败，服务未响应', error: 'error' });
                  reject(error);
                } else {
                  reject(error);
                }
            })
    });
}

export default httpRequest;
