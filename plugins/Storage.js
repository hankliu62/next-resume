const debug = require('debug')('hl-website/Storage');

export default class Storage {
  constructor({ scope = '' } = {}) {
    this.scope = scope;
  }

  getItem = (key, isTemporary) => {
    try {
      const storage = isTemporary ? sessionStorage : localStorage;
      const data = storage.getItem(`${this.scope}/${key}`);
      if (data) {
        return JSON.parse(data);
      }

      return undefined;
    } catch (error) {
      debug(error);
      return undefined;
    }
  }

  setItem = (key, value, isTemporary) => {
    const storage = isTemporary ? sessionStorage : localStorage;
    if (value === undefined) {
      storage.removeItem(`${this.scope}/${key}`);
      return;
    }

    const data = JSON.stringify(value);
    storage.setItem(`${this.scope}/${key}`, data);
  }

  removeItem = (key, isTemporary) => {
    const storage = isTemporary ? sessionStorage : localStorage;
    storage.removeItem(`${this.scope}/${key}`);
  }

  clear = (isTemporary) => {
    const storage = isTemporary ? sessionStorage : localStorage;
    storage.clear();
  }
}
