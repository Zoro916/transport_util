import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { toNumber } from 'lodash';
import thousandSymbol from '../../../utils/parseNumber';
import { connect } from 'dva';
import Tools from './tools';

import './style.less';

class LogTool extends Component {

  state = {
    toolState: false,
  }

  expertClick = () => {
    this.setState({ toolState: !this.state.toolState });
  }

  hideOptions = () => {
    this.setState({ toolState: false });
  }

  render() {
    const count = this.props.log_list
      .map(item => item.record.length)
      .reduce((prev, curr, idx, arr) => {
        return prev + curr;
      }, 0);

    const oil_total = this.props.log_list
      .map(item => toNumber(item.oil))
      .reduce((prev, curr, idx, arr) => {
        return prev + curr;
      }, 0);

    return (
      <div className="log-tool">
        <header>
          <List>
            <List.Item onClick={this.expertClick} arrow={this.state.toolState ? 'down' : 'horizontal'}>
              <span className="date-title">{this.props.start}</span>至<span className="date-title">{this.props.end}</span>
            </List.Item>
          </List>
        </header>
        {
          this.state.toolState && <Tools hideOptions={this.hideOptions} />
        }
        <div className="count">
          <p className="right">油费：<span>{thousandSymbol(oil_total)}</span></p>
          <p className="middle">运输趟数：<span>{count}</span></p>
          <p className="left">共<span>{this.props.log_list.length}</span>条结果</p>
        </div>
      </div>
    );
  }
}

export default connect(state => state.log)(LogTool);
