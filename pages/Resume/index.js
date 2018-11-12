import './index.less';

import { connect } from '~/plugins';
import React, { Component } from 'react';
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
  render() {
    return (
      <div className="resume-container">
        <Head>
          <title>刘小聪 - 刘小聪的个人简历 | Web前端开发工程师 | Front-end Web Developer</title>
          <meta name="keywords" content="刘小聪,个人简历,web前端,工程师,刘小聪的个人简历,frontend,web,developer,job,vue,react" />
          <meta name="description" content="精通前端，涉猎后端，对前端有着浓厚的兴趣；希望能够在前端这条路上一直走下去。" />
        </Head>
        <ReactFullpage
          {...options}
          render={() => {
            return (
              <ReactFullpage.Wrapper className="resume-section-container">
                <div className="section resume-section resume-section-index">
                  <ResumeIndex />
                </div>
                <div className="section resume-section resume-section-introduction">
                  <ResumeIntroduction />
                </div>
                <div className="section resume-section resume-section-skill">
                  <ResumeSkill />
                </div>
                <div className="section resume-section resume-section-experience">
                  <ResumeExperience />
                </div>
                <div className="section resume-section resume-section-project">
                  <ResumeProject />
                </div>
                <div className="section resume-section resume-section-article">
                  <ResumeArticle />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Resume;

export {
  reducer,
};
