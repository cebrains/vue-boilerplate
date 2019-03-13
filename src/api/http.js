/*
 * api请求封装
 * type -请求方式(post/get)
 * url -请求地址
 * params -传递参数
 * isOutsideLink -是否为外链
 * isExport -是否为导出请求
 * isImport -是否为导入请求
 */

import axios from './request'

export function httpRequest(type, url, params, isOutsideLink, isExport, isImport) {
	//导出功能配置
	let config = isExport ? {
		header: {
			'Accept': 'application/vnd.ms-excel',
		},
		responseType: 'blob'
	} : {};

	//get方法
	if (type === "get") {
		return new Promise((resolve, reject) => {
			url = isOutsideLink ? url : axios.defaults.baseURL + url;
			axios.get(url, {
					params,
					withCredentials: true,
					crossDomain: true,
					...config,
				})
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err);
				})
				.catch((error) => {
					reject(error)
				})
		})
	}


	//post方法
	if (type === "post") {
		//导入功能配置
		config = {
			headers: {
				'Content-Type': isImport ? 'multipart/form-data' : 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		}
		return new Promise((resolve, reject) => {
			url = isOutsideLink ? url : axios.defaults.baseURL + url;
			axios({
					method: 'post',
					url: url,
					//导入功能配置
					//当不为导入功能时，开启POST传参序列化
					//当为导入功能，关闭POST传参序列化，以防导入文件失败
					data: isImport ? params : params,
					withCredentials: true,
					crossDomain: true,
					...config,
				})
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err);
				})
				.catch((error) => {
					reject(error)
				})
		})
	}
}

export default httpRequest