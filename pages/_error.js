import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default class Error extends Component {
  static propTypes = {
    statusCode: PropTypes.number,
    translations: PropTypes.object,
  }

  static getInitialProps({ res, err, query }) {
    let code = null;
    if (res) {
      code = res.statusCode;
    } else if (err) {
      code = err.statusCode;
    }

    return { statusCode: code, translations: query.translations };
  }

  render() {
    const { statusCode, translations } = this.props;

    if (!statusCode || ![403, 404, 500].includes(parseInt(statusCode, 10))) {
      return null;
    }

    return (
      <div className="exception-container">
        <div className="exception-content">
          <div className="exception-content-image">
            <img src={`/images/exceptions/${statusCode}.svg`} alt="" />
          </div>
          <div className="exception-content-info">
            <p className="exception-content-info-title">{statusCode}</p>
            <p className="exception-content-info-desc">{translations.app.exception[statusCode]}</p>
            <div className="exception-content-info-actions">
              <Link href="/">
                <Button type="primary">{translations.app.exception.back}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
