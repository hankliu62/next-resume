import './index.less';

import * as actions from './state';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from '~/plugins/ReduxEnhance';
import { store } from '~/pages/index';

@connect(
  (state) => { return state.loading; }
)
class Loading extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
  }

  static show = () => {
    store.dispatch(actions.show());
  }

  static hide = () => {
    store.dispatch(actions.hide());
  }

  state = {
    maxHeight: 0,
  }

  componentDidMount = () => {
    this.setState({ maxHeight: document.body.clientHeight });
  }

  render = () => {
    const { maxHeight } = this.state;
    const { isVisible } = this.props;

    return (
      <Spin
        className="loading"
        style={{ maxHeight }}
        size="large"
        spinning={isVisible}
      />
    );
  }
}

export default Loading;
