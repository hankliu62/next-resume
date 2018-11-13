import './index.less';

import * as Constants from '~/constants';
import { MessageModal, QrcodeModal } from '~/components';

import { Carousel, Icon } from 'antd';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ResumeProject extends PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool,
  }

  state = {
    isVisibleQr: false,
    qrValue: '',
    isVisibleSummary: false,
    summary: '',
  }

  onOpenVisibleQr = (qrValue) => {
    this.setState({ isVisibleQr: true, qrValue });
  }

  onCloseVisibleQr = () => {
    this.setState({ isVisibleQr: false, qrValue: '' });
  }

  onOpenVisibleSummary = (summary) => {
    this.setState({ isVisibleSummary: true, summary });
  }

  onCloseVisibleSummary = () => {
    this.setState({ isVisibleSummary: false, summary: '' });
  }

  render() {
    const { isMobile } = this.props;
    const { isVisibleQr, qrValue, isVisibleSummary, summary } = this.state;

    return (
      <div className="resume-project-wrapper">
        <div className="title-wrapper">
          <h1 className="title">项目经历</h1>
        </div>

        <div className="projects-wrapper">
          <Carousel className="projects-carousel">
            {
              Constants.Projects.map((project) => {
                const { name, company, link, time, image, duties, profile, summary: projectSummary } = project;

                return (
                  <div className="project-wrapper" key={company}>
                    <div className="project-item-wrapper">
                      <div className="project-item">
                        <div className="project-image-wrapper">
                          <img className="project-image" src={image} alt="Project" />
                        </div>
                        <div className="project-content-wrapper">
                          <h5 className="project-name">
                            {`${name}${isMobile ? '' : `(${company})`}`}
                          </h5>
                          <div className="project-time">{time}</div>
                          <div className="project-profile" title="profile">{profile}</div>
                          <ul className="project-duties">
                            {
                              duties.map((duty) => {
                                return (
                                  <li className="project-duty" key={duty}>{duty}</li>
                                );
                              })
                            }
                          </ul>
                        </div>
                      </div>
                      <ul className="project-actions-wrapper">
                        <li className="project-action">
                          <a
                            className="project-link"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer external nofollow"
                            title="项目链接"
                          >
                            <Icon type="link" />
                          </a>
                        </li>
                        <li className="project-action">
                          <Icon
                            type="qrcode"
                            onClick={() => { this.onOpenVisibleQr(link); }}
                            title="项目二维码"
                          />
                        </li>
                        <li className="project-action">
                          <Icon
                            type="file-text"
                            onClick={() => { this.onOpenVisibleSummary(projectSummary); }}
                            title="项目总结"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>

        <QrcodeModal
          visible={isVisibleQr}
          content={qrValue}
          onCancel={this.onCloseVisibleQr}
        />

        <MessageModal
          visible={isVisibleSummary}
          onCancel={this.onCloseVisibleSummary}
          title="项目总结"
        >
          {summary}
        </MessageModal>
      </div>
    );
  }
}
