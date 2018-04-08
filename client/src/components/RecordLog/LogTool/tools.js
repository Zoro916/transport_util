import React, { Component } from 'react';
import { List, InputItem, DatePicker, Picker, Button, Flex, WhiteSpace, Toast } from 'antd-mobile';
import { connect } from 'dva';
import moment from 'moment';

import './style.less';

class Tools extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'log/getAddressOptions' });
  }

  startChange = (date) => {
    if (moment(date).isAfter(this.props.end)) {
      this.props.dispatch({ type: 'log/save', payload: { end: moment(date).add(1, 'month').format('YYYY-MM-DD') } });
    }
    this.props.dispatch({ type: 'log/save', payload: { start: moment(date).format('YYYY-MM-DD') } });
  }

  endChange = (date) => {
    if (moment(date).isBefore(this.props.start)) {
      Toast.info('结束时间必须大于起始时间！', 1.5);
    } else {
      this.props.dispatch({ type: 'log/save', payload: { end: moment(date).format('YYYY-MM-DD') } });
    }
  }

  transportChange = (value) => {
    this.props.dispatch({ type: 'log/save', payload: { transport_code: value } });
  }

  addressOnChange = (value) => {
    this.props.dispatch({ type: 'log/save', payload: { address: value[0] } });
  }

  resetForm = () => {
    this.props.dispatch({ type: 'log/resetForm' });
  }

  submitForm = () => {
    this.props.hideOptions();
    this.props.dispatch({ type: 'log/getLogList' });
  }

  render() {
    return (
      <div className="option">
        <List>
          <DatePicker
            onChange={this.startChange}
            mode="date"
            value={moment(this.props.start).toDate()}
          >
            <List.Item arrow="horizontal">起始时间</List.Item>
          </DatePicker>
          <DatePicker
            onChange={this.endChange}
            mode="date"
            value={moment(this.props.end).toDate()}
          >
            <List.Item arrow="horizontal">结束时间</List.Item>
          </DatePicker>
          <Picker
            data={this.props.addressList}
            cols={1}
            extra={this.props.address}
            onChange={this.addressOnChange}
          >
            <List.Item arrow="horizontal">厂商</List.Item>
          </Picker>
          <InputItem
            clear
            value={this.props.transport_code}
            placeholder="请输入运单编号"
            onChange={(value) => { this.transportChange(value); }}
          >运单编号</InputItem>
        </List>
        <WhiteSpace />
        <Flex>
          <Flex.Item><Button size="small" type="ghost" onClick={this.resetForm}>重置</Button></Flex.Item>
          <Flex.Item><Button size="small" type="primary" onClick={this.submitForm}>查询</Button></Flex.Item>
        </Flex>
      </div>
    );
  }
}


export default connect(state => state.log)(Tools);
