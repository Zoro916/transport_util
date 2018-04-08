import React, { Component } from 'react';
import moment from 'moment';
import { List, InputItem, DatePicker } from 'antd-mobile';
import { connect } from 'dva';

import './style.less';

class OilForm extends Component {

  dateChange = (date) => {
    this.props.dispatch({ type: 'record/save', payload: { date: moment(date).format('YYYY-MM-DD') } });
  }

  oilPayChange = (value) => {
    this.props.dispatch({ type: 'record/save', payload: { oilPay: value } });
  }

  render() {
    return (
      <div className="record-form">
        {
          this.props.compose
            ? null
            : <List renderHeader={() => '消费日期'}>
              <DatePicker
                onChange={this.dateChange}
                mode="date"
                value={moment(this.props.date).toDate()}
              >
                <List.Item arrow="horizontal">消费日期</List.Item>
              </DatePicker>
            </List>
        }
        <List renderHeader={() => '油费金额'}>
          <InputItem
            clear
            value={this.props.oilPay}
            placeholder="请输入油费金额"
            onChange={this.oilPayChange}
          >油费金额</InputItem>
        </List>
      </div>
    );
  }
}

export default connect(state => state.record)(OilForm);
