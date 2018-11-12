import './index.less';

import React, { PureComponent } from 'react';

import { Modal } from 'antd';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

export default class QrcodeModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    content: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  render() {
    const { visible, content } = this.props;

    return (
      <Modal
        visible={visible}
        footer={null}
        closable={false}
        width="270px"
        onCancel={this.props.onCancel}
        wrapClassName="qrcode-modal"
      >
        <QRCode value={content} size={250} />
      </Modal>
    );
  }
}
