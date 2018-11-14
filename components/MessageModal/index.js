import './index.less';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from 'antd';

export default class MessageModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    isMobile: PropTypes.bool,
  }

  render() {
    const { title, visible, isMobile, children } = this.props;

    return (
      <Modal
        visible={visible}
        title={title}
        onCancel={this.props.onCancel}
        onOk={this.props.onCancel}
        wrapClassName={classNames('message-modal', {
          'mobile-message-modal': isMobile,
        })}
      >
        { children }
      </Modal>
    );
  }
}
