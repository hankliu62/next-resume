import './index.less';

import React, { Component } from 'react';
import {
  ResumeArticle,
  ResumeExperience,
  ResumeIndex,
  ResumeIntroduction,
  ResumeProject,
  ResumeSkill,
} from './components';

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
