import './index.less';

import { connect } from '~/plugins';
import React, { Component } from 'react';
import reducer, * as actions from './state';

@connect(
  (state) => { return state.blog; },
  actions
)
class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        Blog
      </div>
    );
  }
}

export default Blog;

export {
  reducer,
};
