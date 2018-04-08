import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Icon, TabBar } from 'antd-mobile';
import { connect } from 'dva';

import index_img from '../assets/index.png';
import index_img_light from '../assets/index2.png';

import record_img from '../assets/record.png';
import record_img_light from '../assets/record2.png';

import './style.less';

const formatTitle = {
  '/daily': '新建记录',
  '/home': '首页',
  '/fast': '快速打卡',
  '/oil': '油费记账',
  '/record': '新建记录',
  '/log': '查看日志',
};

class Layout extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  tabbarChange = (tabbarSelectKey) => {
    const path = tabbarSelectKey === 'home' ? '/home' : '/daily';
    this.context.router.push(path);
    this.props.dispatch({ type: 'layout/save', payload: { title: path } });
  }

  render() {
    return (
      <div className="layout-container">

        <div className="nav">
          <NavBar
            mode="dark"
            icon={this.props.backFuc ? <Icon type="left" /> : null}
            onLeftClick={this.props.backFuc}
          >{formatTitle[this.props.title]}</NavBar>
        </div>

        <div className="main">
          {this.props.children}
        </div>

        <div className="footer">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#7dc5eb"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              selected={this.props.title === '/home'}
              onPress={() => { this.tabbarChange('home'); }}
              icon={index_img}
              selectedIcon={index_img_light}
            />
            <TabBar.Item
              title="新建"
              selected={this.props.title !== '/home' && this.props.title !== '/log'}
              onPress={() => { this.tabbarChange('daily'); }}
              icon={record_img}
              selectedIcon={record_img_light}
            />
          </TabBar>
        </div>

      </div>
    );
  }
}

export default connect(state => state.layout)(Layout);
