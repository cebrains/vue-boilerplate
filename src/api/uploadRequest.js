/*websocket connect*/
import Axios from 'axios';
import Qs from 'qs';
const axios = Axios.create();
export function uploadRequest(url,params){
  return new Promise((resolve, reject)=>{
    axios({
      method: 'post',
      url: url,
      data:Qs.stringify(params),
      withCredentials: true,
      crossDomain: true,
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      timeout:20000,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
