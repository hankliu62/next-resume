import rest from 'axios';
import _ from 'lodash';
import wx from 'weixin-js-sdk';

import Platform from './Platform';

export default class Wechat {
  static _promiseConfigDone = null

  static _resolveConfig = null

  static _rejectConfig = null

  static init = async () => {
    // 微信运行环境且不是模拟器
    if (!Platform.isWechat()) {
      return;
    }

    const url = Platform.getUrl();
    let retryCount = 0;
    if (_.isEmpty(Wechat._promiseConfigDone)) {
      Wechat._promiseConfigDone = new Promise((resolve, reject) => {
        Wechat._resolveConfig = resolve;
        Wechat._rejectConfig = reject;
      });

      wx.ready(() => {
        Wechat._resolveConfig();
      });

      wx.error((error) => {
        if (error.errMsg && retryCount <= 1) {
          Wechat.config(url);
          retryCount++;
        } else {
          Wechat._rejectConfig(error);
        }
      });

      await Wechat.config(url);
    }

    await Wechat._promiseConfigDone;
  }

  static config = async (url) => {
    try {
      const signatureUrl = Platform.getSignatureUrl();
      if (!signatureUrl) {
        return;
      }

      const result = await rest.get(signatureUrl, {
        params: {
          clientUrl: encodeURI(url),
        },
        ignoreLoading: true,
      });

      wx.config({
        beta: true,
        debug: Platform.isDebugJSSDK(),
        appId: result.appId,
        timestamp: result.timestamp,
        nonceStr: result.nonceStr,
        signature: result.signature,
        jsApiList: [
          'onMenuShareTimeline', 'onMenuShareAppMessage',
        ],
      });
    } catch (error) {
      if (Platform.isDebugJSSDK()) {
        alert(error.message);
      }
    }
  }

  static retryToConfig = async (url) => {
    Wechat._promiseConfigDone = null;
    Wechat.config(url);
  }

  static initMenuShareTimeline = async ({ title, link, imgUrl } = {}) => {
    if (!Platform.isWechat()) {
      return;
    }

    await Wechat._promiseConfigDone;
    const shareImgUrl = encodeURI(imgUrl || `${Platform.getUrlOrigin()}/favicon.ico`);

    if (Platform.isDebugJSSDK()) {
      alert(`title: ${title}\n link:${link}\n imgUrl:${shareImgUrl}`);
    }

    wx.onMenuShareTimeline({ title, link, imgUrl: shareImgUrl });
  }

  static initMenuShareAppMessage = async ({ title, description, link, imgUrl } = {}) => {
    if (!Platform.isWechat()) {
      return;
    }

    await Wechat._promiseConfigDone;
    const shareImgUrl = encodeURI(imgUrl || `${Platform.getUrlOrigin()}/favicon.ico`);

    if (Platform.isDebugJSSDK()) {
      alert(`title: ${title}\ndescription: ${description}\n link:${link}\n imgUrl:${shareImgUrl}`);
    }

    wx.onMenuShareAppMessage({ title, desc: description, link, imgUrl: shareImgUrl });
  }
}
