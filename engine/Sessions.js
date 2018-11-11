import Engine from './Engine';

export default class Sessions {
  static _option = {};

  static _schema = {
    temporaryToken: { isTemporary: true },
    token: {},
    language: {},
    profile: { isTemporary: true },
    partners: { isTemporary: true },
  }

  static init = async (option) => {
    Sessions._restoreOption(option);
  }

  static login = (auth, remember) => {
    if (remember) {
      Sessions._option.token = auth.token;
    } else {
      Sessions._option.temporaryToken = auth.token;
    }

    Sessions._option.profile = auth.profile;
    Sessions._option.partners = auth.partners;
  }

  static getToken = () => {
    return Sessions._option.token || Sessions._option.temporaryToken;
  }

  static getProfile = () => {
    return Sessions._option.profile || {};
  }

  static getPartners = () => {
    return Sessions._option.partners || [];
  }

  static resetToken = (token) => {
    if (Sessions._option.token) {
      Sessions._option.token = token;
    } else {
      Sessions._option.temporaryToken = token;
    }
  }

  static resetProfile = (profile) => {
    Sessions._option.profile = profile;
  }

  static clear = () => {
    Sessions._option.token = undefined;
    Sessions._option.temporaryToken = undefined;
    Sessions._option.partners = undefined;
    Engine.logout();
  }

  static _restoreOption = (params) => {
    const option = { $data: {} };
    const config = {};
    for (const [key, op] of Object.entries(Sessions._schema)) {
      Object.defineProperty(option, key, {
        set(newValue) {
          option.$data[key] = newValue;
          Engine.setItem(key, newValue, op);
        },
        get() {
          return option.$data[key];
        },
      });

      config[key] = Engine.getItem(key, op);
    }

    Object.assign(option, config, params);

    Sessions._option = option;
  }
}
