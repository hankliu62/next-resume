import './index.less';

import * as Constants from '~/constants';

import React, { PureComponent } from 'react';

import { Carousel } from 'antd';

export default class ResumeExperience extends PureComponent {
  render() {
    return (
      <div className="resume-experience-wrapper">
        <div className="title-wrapper">
          <h1 className="title">工作经历</h1>
        </div>

        <div className="experiences-wrapper">
          <Carousel className="experiences-carousel">
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
