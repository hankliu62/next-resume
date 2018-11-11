import './index.less';

import * as Constants from '~/constants';

import { Popover, Progress } from 'antd';
import React, { PureComponent } from 'react';

import classNames from 'classnames';

export default class ResumeSkill extends PureComponent {
  renderSkillPopover = (popover, percent) => {
    return (
      <div className="skill-popover-wrapper">
        <h5 className="skill-popover-title">{popover}</h5>
        <div className="skill-popover-progress">
          <Progress percent={percent} showInfo={false} strokeColor="#00b38a" strokeWidth={12} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="resume-skill-wrapper">
        <div className="title-wrapper">
          <h1 className="title">技能</h1>
        </div>

        <div className="skills-wrapper">
          <ul className="skills">
            {
              Constants.Skills.map((skill) => {
                const { type, popover, percent } = skill;
                return (
                  <li className={classNames('skill', `skill-${type}`)} key={type}>
                    <Popover
                      placement="top"
                      overlayClassName="skill-popover"
                      content={this.renderSkillPopover(popover, percent)}
                    >
                      <div className="skill-wrapper">
                        <img src={`/images/resume/skills/${type}.svg`} alt="" />
                      </div>
                    </Popover>
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
