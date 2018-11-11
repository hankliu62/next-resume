import _ from 'lodash';

export default class RouterHelper {
  static buildRouteUrl = (match, newMatch) => {
    let url = newMatch.path || match.path;
    const params = { ...match.params, ...newMatch.params };
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        url = url.replace(new RegExp(`:${key}\\??`), params[key]);
      }
    }

    return url;
  }

  static buildUrlMergeSearchParams = (url, params = {}) => {
    if (_.isEmpty(params)) {
      return url;
    }

    let newUrl = url;
    for (const [key, value] of Object.entries(params)) {
      const reg = new RegExp(`(${key}=.*?)(&|$)`);
      if (value === undefined) {
        // eslint-disable-next-line
        continue;
      }

      if (!reg.test(newUrl)) {
        if (value !== null) {
          newUrl += `${/#.*\?/.test(newUrl) ? '&' : '?'}${key}=${value}`;
        }
      } else {
        const match = reg.exec(newUrl);
        if (value === null) {
          newUrl = newUrl.replace(match[1], '');
        } else {
          newUrl = newUrl.replace(match[1], `${key}=${value}`);
        }
      }
    }

    newUrl = newUrl.replace(/(&|\?)$/, '');

    return newUrl;
  }

  static replaceLocationBy = (params = {}) => {
    const url = RouterHelper.buildUrlMergeSearchParams(window.location.href, params);
    window.location.replace(url);
  }

  static getQuery = (searchString) => {
    const search = _.trimStart(searchString, '?');
    const params = {};

    if (_.isEmpty(search)) {
      return params;
    }

    for (const item of search.split('&')) {
      const pair = item.split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }

    return params;
  }

  static RouterMap = {
    Overview: '/homepage/overview',
    ContactUs: '/homepage/contact',
    Advertising: '/homepage/advertising',
    Cooperation: '/homepage/cooperation',
  }
}
