import './index.less';
import React, { PureComponent } from 'react';
import { Carousel } from '~/components';

export default class ResumeProject extends PureComponent {
  render() {
    return (
      <div className="resume-project-wrapper">
        <div className="title-wrapper">
          <h1 className="title">项目经历</h1>
        </div>

        <div className="projects-wrapper">
          <Carousel>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>
      </div>
    );
  }
}
