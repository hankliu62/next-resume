import './index.less';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

import {
  ResumeArticle,
  ResumeIndex,
  ResumeIntroduction,
  ResumeProject,
  ResumeSkill,
} from './components';

const options = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['resume-index', 'resume-introduction', 'resume-skill', 'resume-project', 'resume-article'],
  navigationTooltips: ['简介', '自我介绍', '技能', '项目经历', '个人博客'],
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  paddingTop: '30px',
  paddingBottom: '30px',
  arrowNavigation: true,
};

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
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
