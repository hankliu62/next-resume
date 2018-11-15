import './index.less';

import * as Constants from '~/constants';

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import ReactSVG from 'react-svg';

export default class ResumeIndex extends PureComponent {
  render() {
    return (
      <div className="resume-index-wrapper">
        <div className="avatar-wrapper">
          <img src="/images/resume/avatar.jpg" className="avatar" alt="avatar" />
        </div>

        <div className="name-wrapper">
          <h2 className="name">{Constants.User.Name}</h2>
        </div>

        <div className="signature-wrapper">
          <p className="signature">{Constants.User.Signature}</p>
        </div>

        <div className="social-accounts-wrapper">
          <ul className="social-accounts">
            {
              Constants.SocialAccounts.map((account) => {
                const { type, link, name } = account;
                return (
                  <li
                    className={classNames('social-account', `social-account-${type}`)}
                    key={type}
                  >
                    <ReactSVG src="/images/resume/circle.svg" className="social-account-circle" />
                    <a
                      className="account-link"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer external nofollow"
                      title={`刘小聪的社交账号-${name}`}
                    >
                      <i className={classNames('hk-icon', `hk-icon-${type}`)} />
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
