import './index.less';

import { connect } from '~/plugins';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Popover } from 'antd';
import {
  ResumeArticle,
  ResumeExperience,
  ResumeIndex,
  ResumeIntroduction,
  ResumeProject,
  ResumeSkill,
} from './components';
import reducer, * as actions from './state';

import Head from 'next/head';
// eslint-disable-next-line
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

const options = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['resume-index', 'resume-introduction', 'resume-skill', 'resume-experience',
    'resume-project', 'resume-article'],
  navigationTooltips: ['简介', '自我介绍', '技能', '工作经历', '项目经验', '个人博客'],
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  paddingTop: '30px',
  paddingBottom: '30px',
  arrowNavigation: true,
};


@connect(
  (state) => { return state.blog; },
  actions
)
class Resume extends Component {
  static propTypes = {
    isMobile: PropTypes.bool,
  }

  render() {
    const { isMobile } = this.props;

    if (isMobile) {
      options.navigation = false;
      options.paddingTop = '5vw';
      options.paddingBottom = '5vw';
    }

    return (
      <div className="resume-container">
        <Head>
          <title>刘小聪 - Web前端工程师简历 | Front-end Web Developer</title>
          <meta name="description" content="刘小聪的Web前端工程师简历，精通前端，涉猎后端，对前端有着浓厚的兴趣；希望能够在前端这条路上一直走下去。" />
          <meta name="keywords" content="刘小聪，web前端工程师，个人简历，前端开发简历网站，前端工程师简历" />
        </Head>
        <ReactFullpage
          {...options}
          render={() => {
            return (
              <ReactFullpage.Wrapper className="resume-section-container">
                <div className="section resume-section resume-section-index">
                  <ResumeIndex isMobile={isMobile} />
                </div>
                <div className="section resume-section resume-section-introduction">
                  <ResumeIntroduction isMobile={isMobile} />
                </div>
                <div className="section resume-section resume-section-skill">
                  <ResumeSkill isMobile={isMobile} />
                </div>
                <div className="section resume-section resume-section-experience">
                  <ResumeExperience isMobile={isMobile} />
                </div>
                <div className="section resume-section resume-section-project">
                  <ResumeProject isMobile={isMobile} />
                </div>
                <div className="section resume-section resume-section-article">
                  <ResumeArticle isMobile={isMobile} />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <div className="arrow-wrapper">
          <Icon type="up" />
        </div>
        <div className="pdf-wrapper">
          <Popover placement="top" content={<span>PDF简历</span>}>
            <a className="link-pdf" href="/resume.pdf" target="_blank" title="刘小聪的PDF简历">
              <Icon type="file-pdf" />
            </a>
          </Popover>
        </div>
      </div>
    );
  }
}

export default Resume;

export {
  reducer,
};
