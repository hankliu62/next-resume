import './index.less';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Carousel, Icon } from 'antd';

export default class CustomCarousel extends PureComponent {
  static propTypes = {
    effect: PropTypes.string,
    className: PropTypes.string,
    arrowPosition: PropTypes.string,
    allowArrow: PropTypes.bool,
    leftAllowIconType: PropTypes.string,
    rightAllowIconType: PropTypes.string,
  }

  static defaultProps = {
    effect: 'scrollx',
    arrowPosition: 'middle',
    leftAllowIconType: 'left-circle',
    rightAllowIconType: 'right-circle',
  }

  bindCarousel = (el) => {
    this.carouselEl = el;
  }

  onClickPrev = () => {
    if (this.carouselEl) {
      this.carouselEl.prev();
    }
  }

  onClickNext = () => {
    if (this.carouselEl) {
      this.carouselEl.next();
    }
  }

  render() {
    const { className, children, effect, arrowPosition, allowArrow,
      leftAllowIconType, rightAllowIconType, ...otherOptions } = this.props;

    return (
      <div
        className={classNames('custom-carousel-container', {
          [className]: className,
          'with-arrow': allowArrow,
        })}
      >
        <Icon
          type={leftAllowIconType}
          onClick={this.onClickPrev}
          className={`arrow-${arrowPosition}`}
        />
        <Carousel
          effect={effect}
          {...otherOptions}
          ref={this.bindCarousel}
        >
          { children }
        </Carousel>
        <Icon
          type={rightAllowIconType}
          onClick={this.onClickNext}
          className={`arrow-${arrowPosition}`}
        />
      </div>
    );
  }
}
