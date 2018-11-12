import './index.less';

import React, { PureComponent } from 'react';

import { Modal } from 'antd';
import PropTypes from 'prop-types';

export default class MessageModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
  }

  render() {
    const { title, visible, children } = this.props;

    return (
      <Modal
        visible={visible}
        title={title}
        onCancel={this.props.onCancel}
        onOk={this.props.onCancel}
        wrapClassName="message-modal"
      >
        { children }
      </Modal>
    );
  }
}
