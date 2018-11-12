import '~/pages/app.less';
import '@babel/polyfill';

import App, { Container } from 'next/app';

import { LocaleProvider } from 'antd';
import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <LocaleProvider locale={zhCN}>
          <Component {...pageProps} />
        </LocaleProvider>
      </Container>
    );
  }
}
