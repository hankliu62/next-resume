import './index.less';

import { connect } from '~/plugins';

import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import reducer, * as actions from './state';

@connect(
  (state) => { return state.postDetail; },
  actions
)
class PostDetail extends Component {
  static propTypes = {
    post: PropTypes.bool,
  }

  render() {
    const { post } = this.props;

    return (
      <div className="blog-detail-container">
        <Head>
          <title>
            {`${post.title} `}
            - 刘小聪个人博客
          </title>
          <meta name="description" content={`${post.description} -- 刘小聪的个人前端博客`} />
          <meta name="keywords" content={post.keywords} />
        </Head>
        <article>
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-extra-info">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{post.date}</span>
            </div>
          </header>
          <hr className="post-header-divider" />
          <div className="post-content">
            <div>1</div>
          </div>
          <hr className="post-footer-divider" />
          <footer className="post-footer">
            <span className="link-post link-pre-post disabled">上一篇：无</span>
            <a
              className="link-post link-next-post"
              alt=""
              href="/post/all/wrong-ways-for-wechat-group-fission"
            >
              下一篇：微信群裂变，你到底错哪了！
            </a>
          </footer>
        </article>
      </div>
    );
  }
}

export default PostDetail;

export {
  reducer,
};
