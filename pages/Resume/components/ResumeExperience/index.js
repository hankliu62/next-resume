import './index.less';

import * as Constants from '~/constants';
import { Carousel } from '~/components';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class ResumeExperience extends PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.setThrottleRotates = _.throttle(this.setRotates, 300);
  }

  state = {
    rotateX: 0,
    rotateY: 0,
  }

  bindExperiences = (el) => {
    this.experienceEl = el;
  }

  setRotates = (diffLeft, diffTop) => {
    this.setState({ rotateY: (diffLeft - 375) / 50, rotateX: (180 - diffTop) / 50 });
  }

  onMouseMove = (e) => {
    const { isMobile } = this.props;

    if (isMobile) {
      return;
    }

    const diffLeft = e.clientX - this.experienceEl.offsetLeft;
    const diffTop = e.clientY - this.experienceEl.offsetTop;
    this.setThrottleRotates(diffLeft, diffTop);
  }

  onMouseLeave = () => {
    const { isMobile } = this.props;

    if (isMobile) {
      return;
    }

    this.setState({ rotateX: 0, rotateY: 0 });
  }

  render() {
    const { rotateX, rotateY } = this.state;
    const { isMobile } = this.props;

    return (
      <div className="resume-experience-wrapper">
        <div className="title-wrapper">
          <h1 className="title">工作经历</h1>
        </div>

        <div
          className="experiences-wrapper"
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseLeave}
          ref={this.bindExperiences}
          style={{ transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)` }}
        >
          <Carousel
            className="experiences-carousel"
            effect="scrollx"
            isMobile={isMobile}
            allowArrow={isMobile}
            dots={!isMobile}
            leftAllowIconType={isMobile ? 'left' : 'left-circle'}
            rightAllowIconType={isMobile ? 'right' : 'right-circle'}
          >
            {
              Constants.Experiences.map((experience) => {
                const { company, time, post, works, image } = experience;
                return (
                  <div className="experience-wrapper" key={company}>
                    <div className="experience-item">
                      <div className="experience-image-wrapper">
                        <img className="company-image" src={image} alt="Company" />
                      </div>
                      <div className="experience-content-wrapper">
                        <h5 className="company-name">{company}</h5>
                        <div className="company-time">{time}</div>
                        <div className="company-post">{post}</div>
                        <ul className="company-works">
                          {
                            works.map((work) => {
                              return (
                                <li className="company-work" key={work}>{work}</li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>
      </div>
    );
  }
}
