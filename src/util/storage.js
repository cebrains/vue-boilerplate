/*
 * 本地存储方法localStorage和sessionStorage 存 取 删
 */
let Storage = {
    local: {
      storage:window.localStorage,
    },
    session: {
      storage: window.sessionStorage
    }
  }
  const api = {
    get(key){
      let val = this.deserialize(this.storage.getItem(key));
      return (val === undefined ? null : val)
    },
    set(key,value){
      if (this.storage.getItem(key) !== null) {
        this.remove(key);
      }
      this.storage.setItem(key, this.serialize(value));
    },
    remove(key){
      this.storage.removeItem(key);
    },
    hash(key){
      return this.get(key) !== undefined
    },
    getSessionStorage: function (key) {
      let val = this.deserialize(sessionStorage.getItem(key));
      return val === undefined ? null : val
    },
    clearAll(){
      this.storage.clear();
    },
    forEach(callback){
      for (let i = 0; i < this.storage.length; i++) {
        let key = this.storage.key(i);
        callback(key, this.get(key))
      }
    },
    serialize(value) {
      if (typeof value === 'string') {
        return value;
      }
      return JSON.stringify(value) // 从一个json对象中解析出字符串
    },
    deserialize(value) {
      try {
        return JSON.parse(value) // 从一个字符串中解析出json对象
      } catch (e) {
        return value || undefined
      }
    }
  }
  
  
  
  Object.assign(Storage.local, api);
  Object.assign(Storage.session, api);
  
export default Storage