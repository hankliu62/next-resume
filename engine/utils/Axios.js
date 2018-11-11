import axios from 'axios';
import _ from 'lodash';

import Engine from '../Engine';
import Sessions from '../Sessions';

const debug = require('debug')('bzy-top100-website/Axios');

export default class Axios {
  static init = () => {
    axios.interceptors.request.use((config) => {
      if (!config.ignoreLoading) {
        Engine.showLoading();
      }

      let { url } = config;
      if (!/^(https:|http:)?\/\//.test(url)) {
        url = `${Engine.getApiEndpoint()}${config.url}`;
      }

      const params = {};
      const headers = {};
      if (Sessions.getToken()) {
        headers['grpc-metadata-token'] = Sessions.getToken();
      }

      _.merge(config, { headers, timeout: 60 * 1000, url, params });

      return config;
    }, Axios.onError);

    axios.interceptors.response.use((response) => {
      const { config: { ignoreLoading } = {} } = response;
      if (!ignoreLoading) {
        Engine.hideLoading();
      }

      return response.data;
    }, Axios.onError);

    axios.getPagedListRecursively = async (url, config = {}, allItems = []) => {
      const params = config.params || {};
      params.itemIndex = config.params.itemIndex || 1;
      params.perPage = config.params.perPage || 1000;

      const result = await axios.get(url, config);
      const newAllItems = allItems.concat(result.items);
      if (result.meta && newAllItems.length < result.meta.totalCount) {
        params.itemIndex += config.params.perPage;
        _.merge(config, { params });
        return axios.getPagedListRecursively(url, config, newAllItems);
      }

      return newAllItems;
    };
  }

  static onError = (error = {}) => {
    debug('Response error', `${error}`, error.response);
    const response = error.response || {};
    const { config: { ignoreLoading, ignoreToast } = {} } = error;
    if (!ignoreLoading) {
      Engine.hideLoading();
    }

    switch (response.status) {
      case 401: {
        Sessions.clear();
        break;
      }
      case 400: {
        if (!ignoreToast) {
          let errorMessage = '';
          if (!_.isEmpty(response.data.error)) {
            errorMessage = response.data.error;
          } else if (_.isEmpty(response.data.errors)) {
            errorMessage = response.data.message;
          } else {
            const firstErrorKey = Object.keys(response.data.errors)[0];
            errorMessage = `${firstErrorKey}: ${response.data.errors[firstErrorKey]}`;
          }

          if (errorMessage) {
            Engine.showToast(errorMessage);
          }
        }

        break;
      }
      case 404:
        Engine.showToast(Engine.i18n('request', response.status.toString()));
        break;
      case 500:
        Engine.showToast(Engine.i18n('request', response.status.toString()));
        break;
      default: {
        if (error.message) {
          if (error.message.includes('Network Error')) {
            Engine.showToast(Engine.i18n('request', 'networkUnavailable'));
          } else if (error.message.includes('timeout')) {
            Engine.showToast(Engine.i18n('request', 'networkTimeout'));
          }
        }
      }
    }

    return Promise.reject(error);
  }
}
