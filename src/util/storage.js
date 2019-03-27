/*
 * 本地存储方法  存 取 删
 */

export const storage = {
    // sessionStorage
    getSessionStorage: function (key) {
        let val = this.deserializeStorage(sessionStorage.getItem(key));
        return val === undefined ? null : val;
    },
    setSessionStorage: function (key, value) {
        if (this.getSessionStorage(key) !== null) {
            this.removeSessionStorage(key);
        }
        sessionStorage.setItem(key, this.serializeStorage(value));
    },
    removeSessionStorage: function (key) {
        if (!key) {
            sessionStorage.clear();
        } else {
            sessionStorage.removeItem(key);
        }
    },
    // localStorage  
    getLocalStorage(key) {
        let val = this.deserializeStorage(localStorage.getItem(key));
        return val === undefined ? null : val;
    },
    setLocalStorage(key, value) {
        if (this.getLocalStorage(key) !== null) {
            this.removeLocalStorage(key);
        }
        localStorage.setItem(key, this.serializeStorage(value));
    },
    removeLocalStorage(key) {
        if (!key) {
            localStorage.clear();
        } else {
            localStorage.removeItem(key);
        }
    },
    serializeStorage(value) {
        if (typeof value === 'string') {
            return value;
        }
        return JSON.stringify(value); // 从一个json对象中解析出字符串
    },
    deserializeStorage(value) {
        try {
            return JSON.parse(value); // 从一个字符串中解析出json对象
        } catch (e) {
            return value || undefined;
        }
    }
}