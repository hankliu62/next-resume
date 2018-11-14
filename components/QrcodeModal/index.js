import './index.less';

import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

export default class QrcodeModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    content: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    isMobile: PropTypes.bool,
  }

  render() {
    const { visible, content, isMobile } = this.props;

    return (
      <Modal
        visible={visible}
        footer={null}
        closable={false}
        width={isMobile ? '80%' : '270px'}
        onCancel={this.props.onCancel}
        wrapClassName={classNames('qrcode-modal', { 'mobile-qrcode-modal': isMobile })}
      >
        <QRCode value={content} size={250} />
      </Modal>
    );
  }
}
