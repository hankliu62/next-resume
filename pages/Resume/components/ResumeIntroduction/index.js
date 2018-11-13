import './index.less';

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import * as Constants from '~/constants';

export default class ResumeIntroduction extends PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool,
  }

  render() {
    const { isMobile } = this.props;

    return (
      <div className="resume-introduction-wrapper">
        <div className="title-wrapper">
          <h1 className="title">自我介绍</h1>
        </div>

        <div className="self-introduction-wrapper">
          <ol className="introductions">
            <li className={classNames('introduction-item')}>
              对前端方面有着浓厚的兴趣，
              {
                isMobile ? '有着四年多的前端工作经验' : '四年来的前端工作经验，使我对前端技术的热情高涨，实战方面得到提升，希望能够在前端这条路上一直走下去'
              }
              ；
            </li>
            <li className="introduction-item">
              做人诚信，做事踏实，性格有点内向，却是一名典型的实干派；
            </li>
            <li className="introduction-item">
              有较强的动手能力，适应力强，在工作和业余时间中，不断提高自己，适应工作的需要；
            </li>
            <li className="introduction-item">
              对工作认真负责，
              {
                isMobile ? '能' : '就是做好自己的本职工作，'
              }
              在规定的时间内保质保量的完成任务；
            </li>
            <li className={classNames('introduction-item', { hidden: isMobile })}>
              学习能力强，前端技术主要在于自学。
            </li>
          </ol>
        </div>

        <div className="self-information-wrapper">
          <ul className="information-items">
            {
              Constants.Information.map((info) => {
                const { type, value } = info;
                return (
                  <li className="information-item" key={type}>
                    <ReactSVG
                      src={`/images/resume/information/${type}.svg`}
                      className="information-item-icon"
                    />

                    <div className="information-item-data">{value}</div>
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
