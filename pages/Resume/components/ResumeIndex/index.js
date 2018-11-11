import './index.less';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import ReactSVG from 'react-svg';
import * as Constants from '~/constants';

export default class ResumeIndex extends PureComponent {
  render() {
    return (
      <div className="resume-index-wrapper">
        <div className="avatar-wrapper">
          <img src="/images/resume/avatar.jpg" className="avatar" alt="avatar" />
        </div>

        <div className="name-wrapper">
          <h1 className="name">{Constants.User.Name}</h1>
        </div>

        <div className="signature-wrapper">
          <p className="signature">{Constants.User.Signature}</p>
        </div>

        <div className="social-accounts-wrapper">
          <ul className="social-accounts">
            {
              Constants.SocialAccounts.map((account) => {
                const { type, icon, link } = account;
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
                    >
                      <ReactSVG src={icon} />
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
