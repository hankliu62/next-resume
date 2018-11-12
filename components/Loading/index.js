import './index.less';

import * as actions from './state';

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from '~/plugins/ReduxEnhance';

@connect(
  (state) => { return state.loading; }
)
class Loading extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
  }

  static show = () => {
    this.$dispatch(actions.show());
  }

  static hide = () => {
    this.$dispatch(actions.hide());
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
