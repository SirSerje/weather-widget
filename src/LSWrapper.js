class LSwrapper { 
  constructor(key) {
    this._key = undefined;
    if(!localStorage) {
      console.error('browser does not support local storage');
    } else {
      this._key = key;
    }
  }

  put(data) {
    localStorage.setItem(this._key, JSON.stringify(data));
  }

  get() {
    return JSON.parse(localStorage.getItem(this._key));
  }

  clearAll() {
    localStorage.clear();
  }
}

export default LSwrapper;