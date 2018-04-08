import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'antd-mobile';
import { connect } from 'dva';

import './style.less';

const data = [
  {
    text: '快速打卡',
    icon: require('../../assets/fast_record.png'),
    path: '/fast',
  },
  {
    text: '油费记账',
    icon: require('../../assets/oil.png'),
    path: '/oil',
  },
  {
    text: '新建记录',
    icon: require('../../assets/count.png'),
    path: '/record',
  },
  {
    text: '查看日志',
    icon: require('../../assets/query.png'),
    path: '/log',
  },
];

class MenuGrid extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  gridCallBack = (v) => {
    const backFuc = () => {
      this.props.dispatch({
        type: 'layout/save',
        payload: {
          title: '/home',
          backFuc: null,
        },
      });
      this.context.router.push('/home');
    };
    this.context.router.push(v.path);
    this.props.dispatch({
      type: 'layout/save',
      payload: { title: v.path, backFuc },
    });
  }

  render() {
    return (
      <div>
        <Grid data={data} activeStyle={false} onClick={this.gridCallBack} />
      </div>
    );
  }
}

export default connect(state => state.home)(MenuGrid);
