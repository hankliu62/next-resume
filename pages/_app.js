import '~/pages/index.less';
import '@babel/polyfill';

import * as Constants from '~/constants';
import { Loading, Toast } from '~/components';
import loading from '~/components/Loading/state';
import Engine from '~/engine';
import res from '~/resources';
import * as ReduxEnhance from '~/plugins/ReduxEnhance';
import { Storage } from '~/plugins';

import App, { Container } from 'next/app';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import React from 'react';
import Router, { withRouter } from 'next/router';
import { createLogger } from 'redux-logger';
import { i18n } from 'redux-pagan';
import thunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import { reducer as blog } from './Blog';
import { reducer as resume } from './Resume';

const reducer = combineReducers({
  i18n,
  loading,
  blog,
  resume,
});

const makeStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        createLogger({
          predicate: () => {
            return process.env.ENV !== 'production';
          },
        }),
      ),
    )
  );

  ReduxEnhance.init(store, res);
  return store;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = { isReady: false }

  componentDidMount = () => {
    try {
      Engine.init({
        storage: new Storage({ scope: 'hankliu' }),
        onInitSuccess: this.onInitSuccess,
        showLoading: Loading.show,
        showToast: Toast.show,
        hideLoading: Loading.hide,
        onLogout: this.onLogout,
      });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  }

  onInitSuccess = () => {
    this.setState({ isReady: true });
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    Router.onRouteChangeStart = () => { NProgress.start(); };
    Router.onRouteChangeComplete = () => { NProgress.done(); };
    Router.onRouteChangeError = () => { NProgress.done(); };

    return (
      <LocaleProvider locale={zhCN}>
        <Provider store={store}>
          <Container>
            <Head>
              {
                Constants.Metas.map(({ name, content }) => {
                  return (<meta name={name} content={content} key={name} />);
                })
              }
              <script src="/scripts/baidu.statistics.min.js" type="text/javascript" />
            </Head>
            <Component {...pageProps} router={router} />
            <Loading />
          </Container>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default withRedux(makeStore)(withRouter(MyApp));
