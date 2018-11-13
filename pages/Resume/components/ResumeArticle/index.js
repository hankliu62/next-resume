import './index.less';

import * as Constants from '~/constants';

import React, { PureComponent } from 'react';

export default class ResumeArticle extends PureComponent {
  render() {
    return (
      <div className="resume-article-wrapper">
        <div className="title-wrapper">
          <h1 className="title">
            <a
              className="link-blog"
              href={Constants.BlogLink}
              target="_blank"
              rel="noopener noreferrer external nofollow"
            >
              个人博客
            </a>
          </h1>
          <div className="content-wrapper">
            开发过程中，敬请期待
          </div>
        </div>
      </div>
    );
  }
}
