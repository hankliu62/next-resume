import './index.less';
import React, { PureComponent } from 'react';
import { Carousel } from 'antd';

export default class CustomCarousel extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="custom-carousel-container">
        <Carousel effect="fade">
          { children }
        </Carousel>
      </div>
    );
  }
}
