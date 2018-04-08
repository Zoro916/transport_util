import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Modal, Toast } from 'antd-mobile';
import PropTypes from 'prop-types';
import * as userServer from '../../services/user';
import './style.less';

const prompt = Modal.prompt;

export default class IndexPage extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  entryClick = () => {
    this.context.router.push('/home');
  }

  render() {
    return (
      <div className="indexpage">
        <p className="title">雷景&nbsp;&nbsp;运输日志</p>
        <div className="desc">
          <p>你的平安，</p>
          <p className="small">就是家人最大的安慰</p>
          <p className="small">愿你旅途的辛苦，换家人一生幸福</p>
        </div>
        <span className="entry-button" onClick={this.entryClick}>进入</span>
        <footer className="copywrite">copyrite by zoro ® 2018 - 2019</footer>
      </div>
    );
  }
}
